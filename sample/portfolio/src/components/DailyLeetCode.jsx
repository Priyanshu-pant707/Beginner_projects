import React, { useEffect, useState } from 'react';

const DAILY_QUERY = `
  query questionOfToday {
    activeDailyCodingChallengeQuestion {
      date
      userStatus
      link
      question {
        title
        titleSlug
        difficulty
      }
    }
  }
`;

const DailyLeetCode = () => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchDaily = async () => {
      try {
        const resp = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: DAILY_QUERY }),
        });
        const result = await resp.json();
        const node = result.data.activeDailyCodingChallengeQuestion;
        if (node) {
          setQuestion({
            title: node.question.title,
            difficulty: node.question.difficulty,
            link: 'https://leetcode.com' + node.link,
          });
        } else {
          setErr('No daily challenge found');
        }
      } catch (e) {
        console.error(e);
        setErr('Error fetching daily challenge');
      } finally {
        setLoading(false);
      }
    };
    fetchDaily();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (err) return <div className="text-red-500">{err}</div>;
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">🔥 Today's LeetCode Challenge</h2>
      <h3 className="text-lg font-bold">{question.title}</h3>
      <p>Difficulty: <span className={`font-semibold ${
        question.difficulty === 'Easy' ? 'text-green-400' :
        question.difficulty === 'Medium' ? 'text-yellow-400' :
        'text-red-400'
      }`}>{question.difficulty}</span></p>
      <a
        href={question.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        🔗 Solve on LeetCode
      </a>
    </div>
  );
};

export default DailyLeetCode;
