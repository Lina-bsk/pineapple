-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 22, 2021 at 11:41 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pineapple`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `email` varchar(250) NOT NULL,
  `agreement` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `agreement`, `date`) VALUES
(1, 'example@gmail.data', 1, '2021-02-22 22:21:45'),
(2, 'first@gmail.com', 1, '2021-02-22 22:29:18'),
(3, 'second@yahoo.com', 1, '2021-02-22 22:30:10'),
(4, 'fifth@gmail.com', 1, '2021-02-22 22:31:12'),
(5, 'seventh@gmail.com', 1, '2021-02-22 22:31:45'),
(6, 'ninth@yahoo.com', 1, '2021-02-22 22:32:00'),
(7, 'second@mail.ru', 1, '2021-02-22 22:35:00'),
(8, 'email@gmail.com', 1, '2021-02-22 23:36:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
