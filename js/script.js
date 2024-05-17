// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 2 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  const lengthAString = parseInt(document.getElementById("size-one").value)
  const lengthBString = parseInt(document.getElementById("size-two").value)
  const lengthCString = parseInt(document.getElementById("size-three").value)

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (angleA == angleB && angleA == angleC) {
    document.getElementById("final-answer").innerHTML = "That matches a equilateral triangle"

  } else if (angleA != angleB && angleA != angleC && angleB != angleC) {
    document.getElementById("final-answer").innerHTML = "That matches a scalene triangle"

  } else if ((angleA != angleB && angleA == angleC) || (angleA == angleB && angleA != angleC)) {
    document.getElementById("final-answer").innerHTML = "That matches a isosceles triangle"

  } else {
    document.getElementById("final-answer").innerHTML = "That does not fit a triangle"

  }

}