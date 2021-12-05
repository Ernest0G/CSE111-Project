from flask import Flask,render_template, jsonify, request
import sqlite3
from sqlite3 import Error
from sqlite3.dbapi2 import Cursor
import json

from flask.wrappers import Request

app = Flask(__name__)
conn = sqlite3.connect("data.sqlite",check_same_thread=False)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/viewRooms/showAllRooms', methods = ['GET'],endpoint = 'showAllRooms')
def showAllRooms():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM room GROUP BY r_roomNumber"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewRooms/showOpenRooms', methods = ['GET'],endpoint = 'showOpenRooms')
def showOpenRooms():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT *
                FROM room
                WHERE r_roomNumber NOT IN 
                (
                    SELECT b_roomNumber as r_roomNumber
                    FROM booking
                );
            """
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewRooms/showBookedRooms', methods = ['GET'],endpoint = 'showBookedRooms')
def showBookedRooms():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT *
                FROM room
                WHERE r_roomNumber IN 
                (
                    SELECT b_roomNumber as r_roomNumber
                    FROM booking
                );
            """
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewRooms/showBooking', methods = ['GET'],endpoint = 'showBooking')
def showBooking():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM booking GROUP BY b_guestNumber"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewRooms/showFilteredRooms', methods = ['POST'],endpoint = 'showFilteredRooms')
def showFilteredRooms():
    global conn
    
    roomFilters = {}
    roomFilters.update(request.get_json())
    print(roomFilters)

    cur = conn.cursor()
    sql = """SELECT * 
            FROM room
            WHERE r_beds = ? AND r_roomCapacity = ? AND r_type = ?"""
    args =(roomFilters['bedCount'],roomFilters['roomCap'],roomFilters['roomType'])
    cur.execute(sql,args)
    rows = cur.fetchall()

    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewCatering/showCateringMenu', methods = ['GET'],endpoint = 'showCateringMenu')
def showBooking():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM catering GROUP BY c_name"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewCatering/showCateringBill', methods = ['GET'],endpoint = 'showCateringBill')
def showCateringBill():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM cateringBill GROUP BY cb_id"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewGuests/showGuests', methods = ['GET'],endpoint = 'showGuests')
def showGuests():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM guest GROUP BY g_guestNumber"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

@app.route('/viewGuests/showGuests/<guestName>', methods = ['POST'],endpoint = 'editGuests')
def editGuests():
    global conn
    
    cur = conn.cursor()
    sql = """SELECT * FROM guest GROUP BY g_guestNumber"""
    cur.execute(sql)
    rows = cur.fetchall()


    
    data = []
    for row in rows:
        data.append(list(row))

    return jsonify(data)

if __name__ == '__main__':
    

    app.run(host='localhost', port=5000, debug=True)