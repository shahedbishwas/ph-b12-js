/*
    ১ থেকে ৫০ এর মধ্যে শুধুমাত্র জোড় সংখ্যাগুলো প্রিন্ট করুন।
*/

// by using for loop
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// by using while loop
let n = 1;
while (n <= 50) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}
