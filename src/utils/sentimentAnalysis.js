// Static sentiment analysis for demo purposes
const positiveKeywords = ['great', 'good', 'excellent', 'amazing', 'helped', 'improved', 'better', 'love', 'fantastic', 'wonderful', 'perfect', 'best', 'awesome', 'thank', 'saved'];
const negativeKeywords = ['bad', 'poor', 'terrible', 'worst', 'hate', 'awful', 'horrible', 'useless', 'waste', 'problem', 'issue', 'slow', 'difficult', 'broken', 'scam', 'refuse', 'deny'];

export const analyzeSentiment = (text) => {
  const lowerText = text.toLowerCase();
  
  const positiveCount = positiveKeywords.filter(word => lowerText.includes(word)).length;
  const negativeCount = negativeKeywords.filter(word => lowerText.includes(word)).length;
  
  // Default to positive if no clear sentiment or if equal
  return negativeCount > positiveCount ? 'negative' : 'positive';
};

export const getSentimentData = (comments) => {
  const sentiments = comments.map(comment => 
    comment.sentiment || analyzeSentiment(comment.text)
  );
  
  return {
    positive: sentiments.filter(s => s === 'positive').length,
    negative: sentiments.filter(s => s === 'negative').length
  };
};

export const getSentimentPercentages = (sentimentData) => {
  const total = sentimentData.positive + sentimentData.negative;
  
  if (total === 0) {
    return { positive: 0, negative: 0 };
  }
  
  return {
    positive: Math.round((sentimentData.positive / total) * 100),
    negative: Math.round((sentimentData.negative / total) * 100)
  };
};