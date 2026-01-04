'use client';

import React from 'react';

interface Goal {
  text: string;
  status: 'pending' | 'succeeded' | 'abandoned';
}

interface DeadlineProps {
  id: string;
  date: string;
  goals: Goal[];
  status: 'active' | 'archived';
}

export default function Deadline({ date, goals, status }: DeadlineProps) {
  // Format date as "January 11, 2026"
  const formatDate = (dateString: string): string => {
    const dateObj = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return dateObj.toLocaleDateString('en-US', options);
  };

  // Calculate days remaining
  const getDaysRemaining = (dateString: string): number => {
    const deadline = new Date(dateString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formattedDate = formatDate(date);
  const daysRemaining = status === 'active' ? getDaysRemaining(date) : null;

  // Goal styling based on status
  const getGoalClassName = (goalStatus: string): string => {
    if (goalStatus === 'succeeded') {
      return 'font-bold text-[#67934d]';
    }
    if (goalStatus === 'abandoned') {
      return 'font-bold text-[#9e2a2b] line-through';
    }
    return 'text-tx';
  };

  return (
    <div className={`
      border-2 border-ui-2 rounded-lg p-6
      ${status === 'archived' ? 'opacity-60' : 'opacity-100'}
      bg-bg-2 shadow-lg
    `}>
      {/* Header */}
      <h2 className="text-xl font-bold text-tx mb-4">
        By {formattedDate} I will:
      </h2>

    

      {/* Goals list */}
      <ol className="list-decimal list-inside space-y-2">
        {goals.map((goal, index) => (
          <li
            key={index}
            className={`text-lg ${getGoalClassName(goal.status)}`}
          >
            {goal.text}
          </li>
        ))}
      </ol>

      {/* Days remaining for active deadlines */}
      {daysRemaining !== null && (
        <p className="text-md font-medium text-tx-2 mb-4 mt-4 italic">
          {daysRemaining > 0
            ? `${daysRemaining} day${daysRemaining === 1 ? '' : 's'} remaining`
            : daysRemaining === 0
            ? 'Today is the deadline!'
            : `${Math.abs(daysRemaining)} day${Math.abs(daysRemaining) === 1 ? '' : 's'} overdue`
          }
        </p>
      )}
    </div>
    
  );
}
