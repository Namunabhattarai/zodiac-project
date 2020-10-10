function zodiac(){
    var birthmonth=document.getElementById('month').value;
    var birthday=document.getElementById('day').value;
    var results="Unknown because you didn't put a valid date";

    if(birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18){
      results = ("Aquarius");
      document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic.  However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
        
    }
    else if(birthmonth == 2 && birthday >= 19 || birthmonth == 3 && birthday <= 20){
        results = ("Pisces");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.";
        
    }
    else if(birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday<=19){
        results = ("Aries");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
      document.getElementById('characteristic').innerHTML="As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings";
        
    }
    else if(birthmonth == 4 && birthday >= 20 || birthmonth == 5 && birthday<=20){
        results=("Taurus");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Taurus is an Earth sign, just like Virgo and Capricorn, and has the ability to see things from a grounded, practical and realistic perspective. They find it easy to make money and stay on same projects for years, or until they are completed. What we often see as stubbornness can be interpreted as commitment, and their ability to complete tasks whatever it takes is uncanny";
        
    }
    else if(birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20){
        results=("Gemini");
       document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.";
        
    }
    else if(birthmonth ==6 && birthday >= 21 || birthmonth == 7 && birthday <=22){
        results=("Cancer");
       document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.";
        
    }
    else if(birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <=22){
        results=("Leo");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
      document.getElementById('characteristic').innerHTML="People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive";
        
    }
    else if(birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        results=("Virgo");
      document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express";
        
    }
    else if(birthmonth == 9 && birthday >= 23 || birthmonth == 10 && birthday <= 22){
        results=("Libra");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
      document.getElementById('characteristic').innerHTML="People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. ";
    } 
    else if(birthmonth == 10 && birthday >= 23 || birthmonth == 11 && birthday <= 21){
        results=("Scorpio");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.Scorpio is a Water sign and lives to experience and express emotions.";
        
    }
    else if(birthmonth ==11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        results=("Sagittarius");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.";
        
    }
    else if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
        results=("Capicorn");
        document.getElementById('photo').innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
      document.getElementById('characteristic').innerHTML="Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time.";
        
    }
    document.getElementById('output').innerHTML=results;
}
 