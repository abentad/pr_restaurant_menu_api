-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2021 at 11:22 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_menu`
--

CREATE TABLE `food_menu` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(80) NOT NULL,
  `food_description` varchar(200) NOT NULL,
  `food_price` varchar(80) NOT NULL,
  `food_rating` varchar(80) NOT NULL,
  `food_image` varchar(200) NOT NULL,
  `restaurant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food_menu`
--

INSERT INTO `food_menu` (`food_id`, `food_name`, `food_description`, `food_price`, `food_rating`, `food_image`, `restaurant_id`) VALUES
(1, 'Angla special 4', 'double sliced chicken, cheese, mayonnaise, double tomato, double salad', '260', '4.5', 'http://cloudinary.com/angla/special4', 1),
(2, 'Angla special 1', 'double beef, double cheese, egg, double slice salad, double slice tomatoe', '180', '2', 'http://cloudinary/angla/special_1', 1),
(3, 'Special tea', 'tea with honey, lemon and alcohol', '70', '3', 'http://cloudinary/bilos/special_tea', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_menu`
--
ALTER TABLE `food_menu`
  ADD PRIMARY KEY (`food_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_menu`
--
ALTER TABLE `food_menu`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `food_menu`
--
ALTER TABLE `food_menu`
  ADD CONSTRAINT `food_menu_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
