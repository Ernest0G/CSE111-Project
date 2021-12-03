from flask import Flask,render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    print('landing')
    return render_template('index.html')



if __name__ == '__main__':
    con = sqlite3.connect('data.sqlite')
    app.run(host='localhost', port=5000, debug=True)