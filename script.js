const counters = document.querySelectorAll('.counter');
const speed = 100; //the lower the slower

counters.forEach(counter =>{
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    //lower inc to slow and higher to slow
    const inc = target / speed;

    //console.log(inc)
    //console.log(count)

    //check if target is reached
    if(count < target ){
      //add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);

      //call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
