function quote() {
  let r=Math.floor(Math.random() * quotes.length);
  let q=quotes[r];
  let y=`"${q.quote}" —${q.author}`

  document.getElementById("quote").innerHTML=y;
}


const quotes = [
  {
    quote: "It is hard to fail but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas A. Edison"
  },
  {
    quote: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
    author: "Wayne Dyer"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.",
    author: "Anthony Robbins"
  },
  {
    quote: "The greater damage for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’",
    author: "Muhammad Ali"
  },
  {
    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford"
  },
  {
    quote: "Live each day as if your life had just begun.",
    author: "Johann Wolfgang Von Goethe"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes"
  },
  {
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller"
  },
  {
    quote: "My mission in life is not merely to survive, but to thrive.",
    author: "Maya Angelou"
  },
  {
    quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that’s where it’s at.",
    author: "Jesse Owens"
  },
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr."},
    {quote: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "Get busy living or get busy dying.", author: "Stephen King"},
    {quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
    {quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison"},
    {quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein"},
    {quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth"},
    {quote: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith"},
    {quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs"},
    {quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca"},
    {quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt"},
    {quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford"},
    {quote: "In order to write about life first you must live it.", author: "Ernest Hemingway"},
    {quote: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra"},
    {quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett"},
    {quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard"},
    {quote: "The unexamined life is not worth living.", author: "Socrates"},
    {quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey"},
    {quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.", author: "Dolly Parton"},
    {quote: "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.", author: "Hillary Clinton"},
    {quote: "Don’t settle for what life gives you; make life better and build something.", author: "Ashton Kutcher"},
    {quote: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", author: "Kobe Bryant"},
    {quote: "I like criticism. It makes you strong.", author: "LeBron James"},
    {quote: "You never really learn much from hearing yourself speak.", author: "George Clooney"},
    {quote: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", author: "Celine Dion"},
    {quote: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.", author: "John F. Kennedy"},
    {quote: "Live for each second without hesitation.", author: "Elton John"},
    {quote: "Life is short, and it is here to be lived.", author: "Kate Winslet"},
    {quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln"},
    {quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
    {quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain"},
    {quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott"},
    {quote: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling"},
    {quote: "Keep calm and carry on.", author: "Winston Churchill"},
    {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau"},
    {quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
    {quote: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa"},
    {quote: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein"},
    {quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.", author: "Helen Keller"},
    {quote: "Life is made of ever so many partings welded together.", author: "Charles Dickens"},
    {quote: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost"},
    {quote: "Love the life you live. Live the life you love.", author: "Bob Marley"},
    {quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller"},
    {quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy"},
    {quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt"},
    {quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Do not let making a living prevent you from making a life.", author: "John Wooden"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown"},
    {quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "Rosa Parks"},
    {quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.", author: "Mother Teresa"},
    {quote: "What we achieve inwardly will change outer reality.", author: "Plutarch"},
    {quote: "One man with courage makes a majority.", author: "Andrew Jackson"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama"},
    {quote: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.", author: "Socrates"},
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
    {quote: "We do not remember days, we remember moments.", author: "Cesare Pavese"},
    {quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw"},
    {quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: "The best way out is always through.", author: "Robert Frost"},
    {quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "The best revenge is massive success.", author: "Frank Sinatra"},
    {quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius"},
    {quote: "May you live all the days of your life.", author: "Jonathan Swift"},
    {quote: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard"},
    {quote: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen"},
    {quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
    {quote: "In three words I can sum up everything I’ve learned about life: It goes on.", author: "Robert Frost"},
    {quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain"},
    {quote: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson"},
    {quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs"},
    {quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.", author: "James Cameron"},
    {quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett"},
    {quote: "Life is about making an impact, not making an income.", author: "Kevin Kruse"},
    {quote: "Life is ten percent what happens to us and ninety percent how we respond to it.", author: "Charles R. Swindoll"},
    {quote: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker"},
    {quote: "An unexamined life is not worth living.", author: "Socrates"},
    {quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey"},
    {quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
    {quote: "The mind is everything. What you think you become.", author: "Buddha"},
    {quote: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou"},
    {quote: "Love the life you live. Live the life you love.", author: "Bob Marley"},
    {quote: "I think, therefore I am.", author: "René Descartes"},
    {quote: "I came, I saw, I conquered.", author: "Julius Caesar"},
    {quote: "Act as if what you do makes a difference. It does.", author: "William James"},
    {quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt"},
    {quote: "Life is made of ever so many partings welded together.", author: "Charles Dickens"},
    {quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
    {quote: "Tis better to have loved and lost than never to have loved at all.", author: "Alfred Lord Tennyson"},
    {quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson"},
    {quote: "Happiness is not by chance, but by choice.", author: "Jim Rohn"}


];