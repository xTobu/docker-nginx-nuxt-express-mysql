SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS `myapp`;
USE myapp;

--
-- Table structure for table `user`
--

create table if not exists `user`
(
	`pkid` int auto_increment,
	`name` varchar(20) null,
	constraint user_pk
		primary key (pkid)
);

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`name`) VALUES ('xTobu');
INSERT INTO `user` (`name`) VALUES ('junxiang');
COMMIT;