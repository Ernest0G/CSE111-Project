from flask import Flask,render_template, jsonify
import sqlite3
from sqlite3 import Error
from sqlite3.dbapi2 import Cursor
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/viewRooms/showAllRooms', methods = ['GET'],endpoint = 'showAllRooms')
def showStudentClasses():
    try:
        sql = """SELECT * FROM room GROUP BY r_roomNumber"""
        Cursor.execute(sql)

        rows = Cursor.fetchall()

        print(rows)
    except Error as e:
        print(e)  
    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)


if __name__ == '__main__':
    connection = sqlite3.connect("data.sqlite")

    app.run(host='localhost', port=5000, debug=True)