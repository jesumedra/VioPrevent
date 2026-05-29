-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-05-2026 a las 05:59:47
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vioprevent`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `grupo` varchar(10) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alumno`, `nombre`, `edad`, `genero`, `grupo`, `promedio`) VALUES
(1, 'Genesis Vera', 16, 'Femenino', '101', 8.99),
(2, 'Carlos Ramirez', 16, 'Masculino', '101', 7.90),
(3, 'Maria Lopez', 17, 'Femenino', '102', 9.10),
(4, 'Luis Mendoza', 16, 'Masculino', '102', 8.30),
(5, 'Valeria Soto', 15, 'Femenino', '103', 8.90),
(6, 'Miguel Castro', 17, 'Masculino', '103', 8.10),
(7, 'Ricardo Vega', 17, 'Masculino', '104', 7.70),
(8, 'Andrea Ruiz', 17, 'Femenino', '105', 9.30),
(9, 'Sandra Peña', 15, 'Femenino', '110', 9.40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_101`
--

CREATE TABLE `grupo_101` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_101`
--

INSERT INTO `grupo_101` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Juan Perez', 16, 8.70),
(2, 'Maria Lopez', 17, 9.10),
(3, 'Carlos Ramirez', 16, 7.90),
(7, 'Genesis Vera', 16, 8.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_102`
--

CREATE TABLE `grupo_102` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_102`
--

INSERT INTO `grupo_102` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Ana Torres', 15, 9.50),
(2, 'Luis Mendoza', 16, 8.30),
(3, 'Fernanda Cruz', 17, 9.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_103`
--

CREATE TABLE `grupo_103` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_103`
--

INSERT INTO `grupo_103` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Diego Herrera', 16, 7.80),
(2, 'Valeria Soto', 15, 8.90),
(3, 'Miguel Castro', 17, 8.10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_104`
--

CREATE TABLE `grupo_104` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_104`
--

INSERT INTO `grupo_104` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Sofia Navarro', 16, 9.20),
(2, 'Ricardo Vega', 17, 7.70),
(3, 'Paola Jimenez', 15, 8.80);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_105`
--

CREATE TABLE `grupo_105` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_105`
--

INSERT INTO `grupo_105` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Daniel Flores', 16, 8.40),
(2, 'Andrea Ruiz', 17, 9.30),
(3, 'Jorge Salas', 15, 7.60);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_106`
--

CREATE TABLE `grupo_106` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_106`
--

INSERT INTO `grupo_106` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Camila Reyes', 16, 9.40),
(2, 'Hector Molina', 17, 8.00),
(3, 'Lucia Campos', 15, 8.60);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_107`
--

CREATE TABLE `grupo_107` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_107`
--

INSERT INTO `grupo_107` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Emilio Rojas', 16, 7.50),
(2, 'Natalia Fuentes', 17, 9.10),
(3, 'Kevin Ortiz', 15, 8.20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_108`
--

CREATE TABLE `grupo_108` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_108`
--

INSERT INTO `grupo_108` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Brenda Silva', 16, 8.70),
(2, 'Oscar Leon', 17, 7.90),
(3, 'Patricia Nunez', 15, 9.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_109`
--

CREATE TABLE `grupo_109` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_109`
--

INSERT INTO `grupo_109` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Raul Medina', 16, 8.50),
(2, 'Karen Pineda', 17, 9.20),
(3, 'Ivan Cabrera', 15, 7.80);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_110`
--

CREATE TABLE `grupo_110` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_110`
--

INSERT INTO `grupo_110` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Monica Lara', 16, 8.90),
(2, 'Eduardo Ibarra', 17, 7.70),
(3, 'Sandra Peña', 15, 9.40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_111`
--

CREATE TABLE `grupo_111` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo_111`
--

INSERT INTO `grupo_111` (`id`, `nombre`, `edad`, `promedio`) VALUES
(1, 'Gabriel Luna', 16, 8.10),
(2, 'Elena Vargas', 17, 9.30),
(3, 'Tomas Delgado', 15, 7.90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orientadores`
--

CREATE TABLE `orientadores` (
  `id_orientador` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `especialidad` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orientadores`
--

INSERT INTO `orientadores` (`id_orientador`, `nombre`, `apellido`, `telefono`, `correo`, `especialidad`) VALUES
(1, 'Laura', 'Martinez', '5512345678', 'laura@vioprevent.com', 'Psicologia'),
(2, 'Carlos', 'Hernandez', '5587654321', 'carlos@vioprevent.com', 'Trabajo Social');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `id_reporte` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `tipo_violencia` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `id_victima` int(11) DEFAULT NULL,
  `id_victimario` int(11) DEFAULT NULL,
  `id_testigo` int(11) DEFAULT NULL,
  `id_responsable` int(11) DEFAULT NULL,
  `id_orientador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reportes`
--

INSERT INTO `reportes` (`id_reporte`, `fecha`, `tipo_violencia`, `descripcion`, `estado`, `id_victima`, `id_victimario`, `id_testigo`, `id_responsable`, `id_orientador`) VALUES
(1, '2026-05-20', 'Bullying', 'Insultos constantes dentro del salón', 'En proceso', 1, 2, 8, 1, 1),
(2, '2026-05-21', 'Violencia verbal', 'Discusión agresiva durante el recreo', 'Resuelto', 3, 4, 6, 2, 2),
(3, '2026-05-22', 'Acoso escolar', 'Mensajes ofensivos por redes sociales', 'Pendiente', 5, 7, 9, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsables`
--

CREATE TABLE `responsables` (
  `id_responsable` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `parentesco` varchar(50) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `responsables`
--

INSERT INTO `responsables` (`id_responsable`, `nombre`, `parentesco`, `telefono`, `correo`, `direccion`) VALUES
(1, 'Lucia Vera', 'Madre', '5566666666', 'lucia@gmail.com', 'Colonia Del Valle'),
(2, 'Jose Ramirez', 'Padre', '5544444444', 'jose@gmail.com', 'Colonia Centro'),
(3, 'Ana Lopez', 'Madre', '5533333333', 'ana@gmail.com', 'Colonia Roma');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testigos`
--

CREATE TABLE `testigos` (
  `id_testigo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `grupo` varchar(10) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `declaracion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `testigos`
--

INSERT INTO `testigos` (`id_testigo`, `nombre`, `edad`, `genero`, `grupo`, `telefono`, `declaracion`) VALUES
(1, 'Andrea Ruiz', 17, 'Femenino', '105', '5577777777', 'Observó insultos dentro del salón'),
(2, 'Miguel Castro', 17, 'Masculino', '103', '5588888888', 'Presenció una discusión en el recreo'),
(3, 'Sandra Peña', 15, 'Femenino', '110', '5599999999', 'Vio mensajes ofensivos en redes sociales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `victimarios`
--

CREATE TABLE `victimarios` (
  `id_victimario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `grupo` varchar(10) DEFAULT NULL,
  `antecedentes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `victimarios`
--

INSERT INTO `victimarios` (`id_victimario`, `nombre`, `edad`, `genero`, `grupo`, `antecedentes`) VALUES
(1, 'Carlos Ramirez', 16, 'Masculino', '101', 'Reportes anteriores de agresion verbal'),
(2, 'Luis Mendoza', 16, 'Masculino', '102', 'Sin antecedentes'),
(3, 'Ricardo Vega', 17, 'Masculino', '104', 'Problemas disciplinarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `victimas`
--

CREATE TABLE `victimas` (
  `id_victima` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `grupo` varchar(10) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `victimas`
--

INSERT INTO `victimas` (`id_victima`, `nombre`, `edad`, `genero`, `grupo`, `telefono`, `direccion`) VALUES
(1, 'Maria Lopez', 17, 'Femenino', '102', '5511111111', 'Colonia Centro'),
(2, 'Valeria Soto', 15, 'Femenino', '103', '5522222222', 'Colonia Roma'),
(3, 'Genesis Vera', 16, 'Femenino', '101', '5533333333', 'Colonia Del Valle');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id_alumno`);

--
-- Indices de la tabla `grupo_101`
--
ALTER TABLE `grupo_101`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_102`
--
ALTER TABLE `grupo_102`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_103`
--
ALTER TABLE `grupo_103`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_104`
--
ALTER TABLE `grupo_104`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_105`
--
ALTER TABLE `grupo_105`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_106`
--
ALTER TABLE `grupo_106`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_107`
--
ALTER TABLE `grupo_107`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_108`
--
ALTER TABLE `grupo_108`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_109`
--
ALTER TABLE `grupo_109`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_110`
--
ALTER TABLE `grupo_110`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_111`
--
ALTER TABLE `grupo_111`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orientadores`
--
ALTER TABLE `orientadores`
  ADD PRIMARY KEY (`id_orientador`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id_reporte`),
  ADD KEY `fk_victima` (`id_victima`),
  ADD KEY `fk_victimario` (`id_victimario`),
  ADD KEY `fk_testigo` (`id_testigo`),
  ADD KEY `fk_responsable` (`id_responsable`),
  ADD KEY `fk_orientador` (`id_orientador`);

--
-- Indices de la tabla `responsables`
--
ALTER TABLE `responsables`
  ADD PRIMARY KEY (`id_responsable`);

--
-- Indices de la tabla `testigos`
--
ALTER TABLE `testigos`
  ADD PRIMARY KEY (`id_testigo`);

--
-- Indices de la tabla `victimarios`
--
ALTER TABLE `victimarios`
  ADD PRIMARY KEY (`id_victimario`);

--
-- Indices de la tabla `victimas`
--
ALTER TABLE `victimas`
  ADD PRIMARY KEY (`id_victima`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `grupo_101`
--
ALTER TABLE `grupo_101`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `grupo_102`
--
ALTER TABLE `grupo_102`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_103`
--
ALTER TABLE `grupo_103`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_104`
--
ALTER TABLE `grupo_104`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_105`
--
ALTER TABLE `grupo_105`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_106`
--
ALTER TABLE `grupo_106`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_107`
--
ALTER TABLE `grupo_107`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_108`
--
ALTER TABLE `grupo_108`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_109`
--
ALTER TABLE `grupo_109`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_110`
--
ALTER TABLE `grupo_110`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupo_111`
--
ALTER TABLE `grupo_111`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `orientadores`
--
ALTER TABLE `orientadores`
  MODIFY `id_orientador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `responsables`
--
ALTER TABLE `responsables`
  MODIFY `id_responsable` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `testigos`
--
ALTER TABLE `testigos`
  MODIFY `id_testigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `victimarios`
--
ALTER TABLE `victimarios`
  MODIFY `id_victimario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `victimas`
--
ALTER TABLE `victimas`
  MODIFY `id_victima` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `fk_orientador` FOREIGN KEY (`id_orientador`) REFERENCES `orientadores` (`id_orientador`),
  ADD CONSTRAINT `fk_responsable` FOREIGN KEY (`id_responsable`) REFERENCES `responsables` (`id_responsable`),
  ADD CONSTRAINT `fk_testigo` FOREIGN KEY (`id_testigo`) REFERENCES `alumnos` (`id_alumno`),
  ADD CONSTRAINT `fk_victima` FOREIGN KEY (`id_victima`) REFERENCES `alumnos` (`id_alumno`),
  ADD CONSTRAINT `fk_victimario` FOREIGN KEY (`id_victimario`) REFERENCES `alumnos` (`id_alumno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
