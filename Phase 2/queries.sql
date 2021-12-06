-- 1) Ernesto Gutierrez
-- Insert a new guest in “guest” where the g_guestNumber = 26, g_name = “Ernesto Gutierrez”, 
-- g_phoneNumber = “724-529-8357”, g_email = “egutierrez99@gmail.com”, and g_guestCount = 1 

INSERT INTO guest (g_guestNumber,g_name,g_phoneNumber,g_email,g_guestCount)
VALUES (26, 'Ernesto Gutierrez', '724-529-8357', 'egutierrez99@gmail.com', 1);

-- 2) Ernesto Gutierrez
-- Show the room number, room capacity, bed count, and price for rooms that have a capacity of exactly 4. 

SELECT r_roomNumber, r_roomCapacity, r_beds, r_pricePerNight
FROM room
WHERE r_roomCapacity = 4;

-- 3) Ernesto Gutierrez
-- Find the total revenue for the day “2021-11-10”  
SELECT SUM(rev_revenue)
FROM revenue
WHERE rev_date = '2021-11-10';

-- 4) Ernesto Gutierrez
-- For each guest who bought a catering item, find the most expensive catering item they bought and 
-- the catering type of it 
SELECT cb_guestNumber,cb_foodName,c_type, MAX(cb_price)
FROM cateringBill
JOIN catering on c_name = cb_foodName
GROUP BY cb_guestNumber;

-- 5) Ernesto Gutierrez
-- Show all the rooms that have not been booked along with their capacity, price, and type.
SELECT r_roomNumber, r_roomCapacity, r_pricePerNight, r_type
FROM room
WHERE r_roomNumber NOT IN 
(
    SELECT b_roomNumber as r_roomNumber
    FROM booking
);

-- 6) Ernesto Gutierrez
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

-- 7) Ernesto Gutierrez
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

--8) Huy Vu
--Find the revenue of the guest number #11 generates? We need to be able to find the revenue each guest generates.
SELECT rev_revenue
FROM revenue
WHERE rev_guestNumber = 11;

-- 9) Huy Vu
-- Change the guest #18’s room number to 30. The guest wants to change the room.
UPDATE booking
SET b_roomNumber = 30
WHERE b_guestNumber = 18;

-- 10) Huy Vu
-- Delete the booking of guest#25. That person just cancelled the booking
DELETE 
FROM booking
WHERE b_guestNumber = 25;

-- 11) Huy Vu
-- Find the number of guests that order breakfast. 
-- The waiter needs to prepare for the number of dishes on the table.
SELECT [COUNT](*)
FROM cateringBill, catering
WHERE c_name = cb_foodName AND c_type = "Breakfast";

-- 12) Huy Vu
-- Find the number of guests who want Lasagna. The chefs want to know for specific order.
SELECT [COUNT](*)
FROM cateringBill
WHERE cb_foodName = "Lasagna";

-- 13) Huy Vu
-- Find the guest with the highest money paid to the hotel. 
-- Print the amount, and the guest name
-- The guest with highest paid is our favorite customer!
SELECT [MAX](rev_revenue), g_name
FROM guest, revenue
WHERE rev_guestNumber = g_guestNumber;

-- 14) Huy Vu
-- Find the guest with the lowest money paid to the hotel. 
-- Print the amount, and the guest name
-- Encourage that guest to comback again one day!
SELECT [MIN](rev_revenue), g_name
FROM guest, revenue
WHERE rev_guestNumber = g_guestNumber;

-- 15) Huy Vu
-- Add another waiter name “Tim Hathaway”. He just got qualified for the job!
INSERT INTO staff (s_ID, s_name, s_jobTitle) VALUES (13, 'Tim Hathaway', 'Waiter');

-- 16) Huy Vu
-- Delete Victor Lam from the employee list. This employee is no longer here.
DELETE 
FROM staff
WHERE s_name = "Victor Lam";

-- 17) Huy Vu
-- Update the cost of pizza to $8. Ingredients' cost increases
UPDATE catering
SET c_price = 8
WHERE c_name = "Pizza";
-- Because cateringBill has the price of the food as well
UPDATE cateringBill
SET cb_price = 8
WHERE cb_foodName = "Pizza";

--18) Huy Vu
-- Guest number 25 does not like having a mouse in his room. 
--Therefore, change the feedback to “A mouse is in the room. Would not recommend the hotel!”
UPDATE feedback
SET f_comment = "A mouse is in the room. Would not recommend the hotel!", f_rating = 2
WHERE f_guestNumber = 25;

-- 19) Ernesto Gutierrez
-- Find the cheapest room for each room type that hasn't been booked. 
-- Display the room type, room number,bed count, room capacity, and its price. 
SELECT r_type, r_roomNumber, r_beds, r_roomCapacity, MIN(r_pricePerNight)
FROM
(
    SELECT r_roomNumber, r_roomCapacity,r_beds, r_pricePerNight, r_type
    FROM room
    WHERE r_roomNumber NOT IN 
    (
        SELECT b_roomNumber as r_roomNumber
        FROM booking
    )
)
GROUP BY r_type;

-- 20) Ernesto Gutierrez
-- For each staff member that was given feedback from a guest, find their average, highest, and lowest rating.
SELECT s_name, AVG(f_rating), MAX(f_rating), MIN(f_rating)
FROM staff
JOIN feedback ON f_staffID = s_ID
GROUP BY s_name;

-- 21) Huy Vu
-- Change the room cost of room number 25 to $500. Hotel manager wants to increases the price.
UPDATE room
SET r_pricePerNight = 500
WHERE r_roomNumber = 25;


-- 22) 
-- AVG booking days for each room
SELECT r_roomNumber,AVG(b_daysBooked)
FROM booking
JOIN room on r_roomNumber = b_roomNumber
JOIN guest on g_guestNumber = b_roomNumber
GROUP BY r_roomNumber

-- 23) 
-- Amount of food bought for each food
SELECT c_name, COUNT(cb_foodName)
from catering
JOIN cateringBill on c_name = cb_foodName
JOIN guest on g_guestNumber = cb_guestNumber
GROUP BY c_name

SELECT AVG(c_price)
FROM catering

SELECT cb_foodName, MAX(popFood)
FROM
(
    SELECT cb_foodName, count(cb_foodName) as popFood
    FROM cateringBill
    GROUP BY cb_foodName
);