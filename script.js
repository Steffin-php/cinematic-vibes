* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.7s ease;
  color: #fff;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
}

.container {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: auto;
  padding: 30px;
  text-align: center;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
}

.purpose {
  opacity: 0.85;
  margin: 15px 0 30px;
  font-size: 1.1rem;
}

.categories button,
.actions button {
  margin: 6px;
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid rgba(255,255,255,0.4);
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.categories button:hover,
.actions button:hover {
  background: #fff;
  color: #000;
}

.quote-box {
  margin: 40px 0;
  padding: 30px;
  background: rgba(0,0,0,0.4);
  border-radius: 15px;
}

#quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  line-height: 1.7;
}

#author {
  display: block;
  margin-top: 15px;
  opacity: 0.75;
}

.label {
  display: block;
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.6;
}

footer {
  margin-top: 40px;
  font-size: 0.8rem;
  opacity: 0.6;
}
