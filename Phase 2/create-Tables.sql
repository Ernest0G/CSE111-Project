CREATE TABLE room (
    r_roomNumber int PRIMARY KEY,
    r_beds int,
    r_roomCapacity int,
    r_type varchar(10),
    r_pricePerNight int
);
			
CREATE TABLE booking (
    b_guestNumber int,
    b_roomNumber int,
    b_dateBooked date,
    b_daysBooked int
);

DROP TABLE guest

CREATE TABLE guest (
    g_guestNumber int PRIMARY KEY,
    g_name varchar(255),
    g_phoneNumber varchar(15),
    g_email varchar(255),
    g_guestCount int
);

DROP TABLE feedback
CREATE TABLE feedback (
    f_guestNumber int,
    f_staffID int,
    f_rating int,
    f_comment varchar(255)
);

CREATE TABLE staff (
    s_ID int,
    s_name varchar(255),
    s_jobTitle varchar(255)
);

