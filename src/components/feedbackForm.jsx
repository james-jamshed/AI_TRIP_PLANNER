import { useState } from 'react';
import { db } from "../service/firebaseConfig"; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function FeedbackForm({ tripId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        tripId,
        rating,
        comment,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Rate Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Rating (1 to 5):</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(+e.target.value)}
            min="1"
            max="5"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Your feedback"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded p-2"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          Submit
        </button>
      </form>
      {success && <p className="text-green-500 mt-2">Thanks for your feedback!</p>}
    </div>
  );
}
