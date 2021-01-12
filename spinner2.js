let i = 0;
let arr = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   \n'];
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + arr[i]);
  }, i*200+100);
}
