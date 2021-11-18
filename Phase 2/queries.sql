-- 1)
-- Insert a new guest in “guest” where the g_guestNumber = 26, g_name = “Ernesto Gutierrez”, 
-- g_phoneNumber = “724-529-8357”, g_email = “egutierrez99@gmail.com”, and g_guestCount = 1 

INSERT INTO guest (g_guestNumber,g_name,g_phoneNumber,g_email,g_guestCount)
VALUES (26, 'Ernesto Gutierrez', '724-529-8357', 'egutierrez99@gmail.com', 1);

-- 2)
-- Show the room number, room capacity, bed count, and price for rooms that have a capacity of exactly 4. 

SELECT r_roomNumber, r_roomCapacity, r_beds, r_pricePerNight
FROM room
WHERE r_roomCapacity = 4;

-- 3)
-- Find the total revenue for the day “2021-11-10”  
SELECT SUM(rev_revenue)
FROM revenue
WHERE rev_date = '2021-11-10';

-- 4)
-- For each guest who bought a catering item, find the most expensive catering item they bought and 
-- the catering type of it 
SELECT cb_guestNumber,cb_foodName,c_type, MAX(cb_price)
FROM cateringBill
JOIN catering on c_name = cb_foodName
GROUP BY cb_guestNumber;

-- 5)
-- Show all the rooms that have not been booked along with their capacity, price, and type.
SELECT r_roomNumber, r_roomCapacity, r_pricePerNight, r_type
FROM room
WHERE r_roomNumber NOT IN 
(
    SELECT b_roomNumber as r_roomNumber
    FROM booking
);

-- 6) 
-- Find the catering item bought the most for each catering type
SELECT cb_foodName, MAX(occurance), c_type
FROM 
(
    SELECT cb_foodName, COUNT(cb_foodName) as occurance, c_type
    FROM cateringBill
    JOIN catering on c_name = cb_foodName
    GROUP BY cb_foodName
)
GROUP BY c_type;

-- 7)
-- For each room that hasn’t been booked, find the rooms that have a capacity of 4 but only 2 beds. 
-- Display the room number, number of beds, capacity, and price. 
SELECT r_roomNumber, r_roomCapacity,r_beds, r_pricePerNight
FROM
(
    SELECT r_roomNumber,r_beds, r_roomCapacity, r_pricePerNight, r_type
    FROM room
    WHERE r_roomNumber NOT IN 
    (
        SELECT b_roomNumber as r_roomNumber
        FROM booking
    )
)
WHERE r_roomCapacity = 4 AND r_beds = 2;

-- 20) 
-- For each staff member that was given feedback from a guest, find their average rating.
-- Display the name of the staff and their average, highest, and lowest rating.
SELECT s_name, AVG(f_rating), MAX(f_rating), MIN(f_rating)
FROM staff
JOIN feedback ON f_staffID = s_ID
GROUP BY s_name