function countFilesInBuckets(commands) {
  const buckets = {};

  let currentBucket = null;
  
  for (const command of commands) {
    const [action, ...rest] = command.split(' ');
    
    if (action === 'goto') {
      currentBucket = rest.join(' ');
      if (!buckets[currentBucket]) {
        buckets[currentBucket] = 0;
      }
    } else if (action === 'create' && currentBucket) {
      buckets[currentBucket]++;
      console.log(buckets)
    }
  }

  let maxFiles = 0;
  let maxBucket = null;

  for (const bucket in buckets) {
    if (buckets[bucket] > maxFiles) {
      maxFiles = buckets[bucket];
      maxBucket = bucket;
    }
  }

  return maxBucket;
}

// Example usage:
const commands = ["goto A", "create file A", "goto B", "create file C", "create file D", "goto A", "create file B", "create file E"];
const result = countFilesInBuckets(commands);
console.log('Bucket with most files:', result);