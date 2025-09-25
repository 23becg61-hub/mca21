import { Comment, SentimentData } from '@/types';

/**
 * Sentiment Analysis Module
 * 
 * This module provides sentiment classification for user comments.
 * Currently uses a hybrid approach:
 * 1. For new user comments: Uses the "I" rule classification
 * 2. For static comments: Uses pre-defined sentiment values
 * 3. Fallback: Keyword-based classification
 * 
 * Architecture designed for easy extension to real AI-based sentiment analysis
 */

// Static keyword-based classification (fallback method)
const positiveKeywords = ['great', 'good', 'excellent', 'amazing', 'helped', 'improved', 'better', 'love', 'fantastic', 'wonderful', 'perfect', 'best', 'awesome'];
const negativeKeywords = ['bad', 'poor', 'terrible', 'worst', 'hate', 'awful', 'horrible', 'useless', 'waste', 'problem', 'issue', 'slow', 'difficult'];

/**
 * AI-like Classification Hack for User Comments
 * 
 * Simple rule for demo purposes:
 * - If first word starts with capital "I" → Negative sentiment
 * - Otherwise → Positive sentiment
 * 
 * This simulates AI classification and can be easily replaced with real AI API calls
 * 
 * @param text - The comment text to analyze
 * @param isUserComment - Whether this is a new user comment (applies "I" rule) or static comment
 * @returns 'positive' | 'negative'
 */
export const analyzeSentiment = (text: string, isUserComment: boolean = false): 'positive' | 'negative' => {
  // Apply "I" rule for new user comments only
  if (isUserComment) {
    const firstWord = text.trim().split(' ')[0];
    // If first word starts with capital "I", classify as negative
    if (firstWord && firstWord.startsWith('I') && firstWord[0] === 'I') {
      return 'negative';
    }
    // Otherwise classify as positive
    return 'positive';
  }
  
  // Fallback to keyword-based analysis for static comments or edge cases
  const lowerText = text.toLowerCase();
  const positiveCount = positiveKeywords.filter(word => lowerText.includes(word)).length;
  const negativeCount = negativeKeywords.filter(word => lowerText.includes(word)).length;
  
  // Default to positive if no clear sentiment or if equal
  return negativeCount > positiveCount ? 'negative' : 'positive';
};

export const getSentimentData = (comments: Comment[]): SentimentData => {
  const sentiments = comments.map(comment => 
    comment.sentiment || analyzeSentiment(comment.text)
  );
  
  return {
    positive: sentiments.filter(s => s === 'positive').length,
    negative: sentiments.filter(s => s === 'negative').length
  };
};

export const getSentimentPercentages = (sentimentData: SentimentData) => {
  const total = sentimentData.positive + sentimentData.negative;
  
  if (total === 0) {
    return { positive: 0, negative: 0 };
  }
  
  return {
    positive: Math.round((sentimentData.positive / total) * 100),
    negative: Math.round((sentimentData.negative / total) * 100)
  };
};