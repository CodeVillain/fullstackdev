class XKCDMeme {
  constructor() {
    this.index = 1;
    this.pending = false;
    this.queue = [];
  }

  next(callback) {
    if (this.pending) {
      this.queue.push(callback);
    } else {
      this.pending = true;
      this.get(callback);
    }

    return this;
  }

  get(callback) {

    fetch(`/xkcd?id=${this.index}`)
      .then(response => response.json())
      .then(json => {
        callback(json);

        this.index = this.index + 1;

        if (this.queue.length > 0) {
          this.get(this.queue.slice(0, 1)[0]);
          this.queue.shift();
        } else {
          this.pending = false;
        }
      });
  }
}

const xkcdMeme = new XKCDMeme();

function addMemeToDOM(meme) {
  const img = document.createElement('img');
  img.setAttribute('src', `/images/${meme.name}`);

  document.getElementById('app').appendChild(img);
}

xkcdMeme
  .next(addMemeToDOM)
  .next(addMemeToDOM);