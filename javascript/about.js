function showCard(letter) {
      const messages = {
        G: "The name of our website is <i>GAMOZO</i>-a creative blend symbolizing fun and games.<br>It's our first step into <span style='color:#6b003e;'><b>web development</b></span>.",
        A: "This website is fully built using <i>HTML</i>,<i>CSS</i>, and <i> JavaScript<i/>.<br> We focused on making the frontend interactive and fun to use.",
        M: "It all started during our semester holidays, when the three of us decided to use the break to learn web development.",
        O: "After learning the basics, we wanted to turn our knowledge into something practical. We brainstormed many ideas for days.",
        Z: "In college, during boring lectures, we used to play <span style='color:#6b003e;'><b>Tic Tac Toe</b></span>,<span style='color:#6b003e;'><b> Rock Paper Scissors</b></span>, etc. That's how we thought: why not build a<span style='color:#6b003e;'><b>game website<b></span>?",
        O2: "Currently, we have Tic Tac Toe, Number Guess, and Stone Paper Scissors.<br> But this is just the beginning, we're excited to keep learning and growing!"
      };

      const titleMap = {
        G: "GAMOZO - THE NAME",
        A: "ALL ABOUT THE  TECH",
        M: "MOTIVATION BEHIND IT",
        O: "OUR IDEA SPARK",
        Z: "ZERO BORING MOVEMENTS",
        O2: "ONWARDS JOURNEY",
      };

      document.getElementById("popupTitle").innerText = titleMap[letter];
      document.getElementById("popupMessage").innerHTML = messages[letter];

      document.getElementById("popupCard").classList.add("show");
      document.getElementById("sliderContainer").classList.add("blurred");
      document.getElementById("overlay").classList.add("show");
    

}
       

    function hideCard() {
      document.getElementById("popupCard").classList.remove("show");
      document.getElementById("sliderContainer").classList.remove("blurred");
      document.getElementById("overlay").classList.remove("show");
    }

