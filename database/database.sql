
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


-- --------------------------------------------------------

--
-- Table structure for table `courier`
--

CREATE TABLE `courier` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courier`
--

INSERT INTO `courier` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'FastWay', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09'),
(2, 'Wimo', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id`, `name`, `mobile`, `createdAt`, `updatedAt`) VALUES
(1, 'Marko Pandres', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09'),
(2, 'Anmol Dares', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09'),
(3, 'Adam Aldo', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09'),
(4, 'Nazih Omar', NULL, '2018-07-19 10:14:09', '2018-07-19 10:14:09');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `toLocation` varchar(255) DEFAULT NULL,
  `fromLocation` varchar(255) DEFAULT NULL,
  `description` text,
  `startedAt` datetime DEFAULT NULL,
  `finishedAt` datetime DEFAULT NULL,
  `deliveryDate` date DEFAULT NULL,
  `status` enum('completed','pending','started','failed') DEFAULT NULL,
  `driverComment` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `driverId` int(11) DEFAULT NULL,
  `courierId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `toLocation`, `fromLocation`, `description`, `startedAt`, `finishedAt`, `deliveryDate`, `status`, `driverComment`, `createdAt`, `updatedAt`, `driverId`, `courierId`) VALUES
(1, '25.125386, 55.227821', '25.204849,55.270783', 'Deliver a credit card, user must sign', '2019-05-09 23:36:08', '2019-05-09 23:56:09', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 19:46:38', 1, 1),
(2, '25.127795, 55.226619', '25.191099, 55.283402', 'Deliver a bank statement', '2019-05-10 02:26:08', '2019-05-10 02:56:00', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 2, 2),
(3, '25.138623, 55.231355', '25.194594, 55.274034', 'Deliver souq.com order', '2019-05-10 07:21:18', '2019-05-10 07:43:00', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 1, 1),
(4, '25.089483, 55.189321', '25.166517, 55.278027', 'Grocery Delivery', '2019-05-10 07:16:38', '2019-05-10 02:33:10', '2019-05-10', 'failed', 'Can\'t reach the customer, customer not answering calls', '2018-07-19 10:16:37', '2018-07-19 19:38:56', 3, 2),
(5, '25.074626, 55.193905', '25.166517, 55.278027', 'Deliver a credit card, user must sign', '2019-05-10 09:23:03', '2019-05-10 02:44:40', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 1, 1),
(6, '25.074626, 55.193905', '25.166051, 55.271847', 'Deliver noon.com shipping', '2019-05-10 09:26:08', '2019-05-10 09:56:00', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 3, 2),
(7, '25.089483, 55.189321', '25.194594, 55.274034', 'Deliver a document shipping', '2019-05-10 13:56:28', '2019-05-10 14:32:40', '2019-05-10', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 2, 2),
(8, '25.138623, 55.231355', '25.089240, 55.211242', 'Deliver emirates ID', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2019-05-22', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 19:31:34', 4, 1),
(9, '25.127795, 55.226619', '25.166051, 55.271847', 'Deliver emirates ID', '2019-05-12 11:06:08', '0000-00-00 00:00:00', '2019-05-12', 'started', '', '2018-07-19 10:16:37', '2018-07-19 10:16:37', 1, 1),
(10, '25.125386, 55.227821', '25.194594, 55.274034', 'Deliver a souq.com shipping', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2019-05-25', 'completed', '', '2018-07-19 10:16:37', '2018-07-19 19:41:23', 3, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courier`
--
ALTER TABLE `courier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `driverId` (`driverId`),
  ADD KEY `courierId` (`courierId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courier`
--
ALTER TABLE `courier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`driverId`) REFERENCES `driver` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`courierId`) REFERENCES `courier` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
