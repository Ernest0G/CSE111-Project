-- 1)
-- Insert a new guest in “guest” where the g_guestNumber = 26, g_name = “Ernesto Gutierrez”, 
-- g_phoneNumber = “724-529-8357”, g_email = “egutierrez99@gmail.com”, and g_guestCount = 1 
-- Give the user the ability to registered as a new guest
INSERT INTO guest (g_guestNumber,g_name,g_phoneNumber,g_email,g_guestCount)
VALUES (26, 'Ernesto Gutierrez', '724-529-8357', 'egutierrez99@gmail.com', 1)
--2)
--

--3)
--

--4)
--

--5)
--

--6)
--

--7)
--

--8)
--Find the revenue of the guest number #11 generates? We need to be able to find the revenue each guest generates.
SELECT rev_revenue
FROM revenue
WHERE rev_guestNumber = 11

--9)
--Change the guest #18’s room number to 30. The guest wants to change the room.
UPDATE booking
SET b_roomNumber = 30
WHERE b_guestNumber = 18
--10)
--Delete the booking of guest#25. That person just cancelled the booking
DELETE 
FROM booking
WHERE b_guestNumber = 25
--11)
--Find the number of guests that order breakfast. 
--The waiter needs to prepare for the number of dishes on the table.
SELECT [COUNT](*)
FROM cateringBill, catering
WHERE c_name = cb_foodName AND c_type = "Breakfast"
--12)
--Find the number of guests who want Lasagna. The chefs want to know for specific order.
SELECT [COUNT](*)
FROM cateringBill
WHERE cb_foodName = "Lasagna"
--13)
-- Find the guest with the highest money paid to the hotel. 
--Print the amount, and the guest name
-- The guest with highest paid is our favorite customer!
SELECT [MAX](rev_revenue), g_name
FROM guest, revenue
WHERE rev_guestNumber = g_guestNumber
--14)
--Find the guest with the lowest money paid to the hotel. 
--Print the amount, and the guest name
-- Encourage that guest to comback again one day!
SELECT [MIN](rev_revenue), g_name
FROM guest, revenue
WHERE rev_guestNumber = g_guestNumber
--15)
--Add another waiter name “Tim Hathaway”. He just got qualified for the job!
INSERT INTO staff (s_ID, s_name, s_jobTitle) VALUES (13, 'Tim Hathaway', 'Waiter')
--16)
--Delete Victor Lam from the employee list. This employee is no longer here.
DELETE 
FROM staff
WHERE s_name = "Victor Lam"
--17)
--Update the cost of pizza to $8. Ingredients' cost increases
UPDATE catering
SET c_price = 8
WHERE c_name = "Pizza"
-- Because cateringBill has the price of the food as well
UPDATE cateringBill
SET cb_price = 8
WHERE cb_foodName = "Pizza"

--18)
-- Guest number 25 does not like having a mouse in his room. 
--Therefore, change the feedback to “A mouse is in the room. Would not recommend the hotel!”
UPDATE feedback
SET f_comment = "A mouse is in the room. Would not recommend the hotel!"
WHERE f_guestNumber = 25

--19)
--

--20)
--

--21)
--Change the room cost of room number 25 to $500. Hotel manager wants to increases the price.
UPDATE room
SET r_pricePerNight = 500
WHERE r_roomNumber = 25