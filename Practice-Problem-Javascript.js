/*1. จงเขียน function นำตัวอักษรตัวสุดท้ำยมำแสดงผล
Get(“WeStride”) ผล “e”
Get(“Zoo”) ผล “o”
Get(“QWE”) ผล “E”
Get(“ZxCvBn”) ผล “n”
*/

function LastChar(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return null;
  }

  return str.charAt(str.length - 1);
}
console.log('-------------- Question 1 --------------');
console.log(LastChar("WeStride")); 
console.log(LastChar("Zoo")); 
console.log(LastChar("QWE"));
console.log(LastChar("ZxCvBn"));
console.log('-------------- Question 1 --------------');

/*2. จงเขียน function นำตัวอักษรแยกใส่ไว้ใน array
Get(“WeStride”) ผล [“W”, “e”, “S”, “t”, “r”, “i”, “d”, “e”];
Get(“Zoo”) ผล [“Z”, “o”, “o”];
Get(“Zoo”) ผล [“Q”, “W”, “E”];
Get(“ZxCvBn”) ผล [“Z”, “x”, “C”, “v”, “B”, “n”];
*/

function splitStrToArr(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return [];
  }

  return str.split('');
}

console.log('-------------- Question 2 --------------');
console.log(splitStrToArr("WeStride"));
console.log(splitStrToArr("Zoo")); 
console.log(splitStrToArr("QWE")); 
console.log(splitStrToArr("ZxCvBn"));
console.log('-------------- Question 2 --------------');

/*3. จงเขียน function น ำตัวเลขมำยกก ำลัง
Get(8, 2) ผล (8 ยกก ำลัง 2 = 64)
Get(9, 3) ผล (9 ยกก ำลัง 3 = 729)
Get(7, 5) ผล (7 ยกก ำลัง 5 = 16,807)
Get(6, 6) ผล (6 ยกก ำลัง 6 = 279,936)
*/

function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log('-------------- Question 3 --------------');
console.log(power(8, 2));
console.log(power(9, 3));
console.log(power(7, 5));
console.log(power(6, 6));
console.log('-------------- Question 3 --------------');

//4. จงเขียน loop ให้แสดงผล 0 1 2 3 4 5 6 7 8 9 10

let loopnumber = '';
for (let i = 0; i <= 10; i++) {
  loopnumber = loopnumber + i + ' ';
}

console.log('-------------- Question 4 --------------');
console.log(loopnumber);
console.log('-------------- Question 4 --------------');

//5. จงเขียน loop ให้แสดงผล 10 9 8 7 6 5 4 3 2 1 0

let loopnumberreverse = '';
for (let i = 10; i >= 0; i--) {
  loopnumberreverse += i + ' ';
}

console.log('-------------- Question 5 --------------');
console.log(loopnumberreverse);
console.log('-------------- Question 5 --------------');

/*6. จงเขียน function ตรวจสอบว่าประโยคนั้นมีช่องว่ำงกี่ช่องว่ำง
Get(“Hello Thailand.”) ผล 1
Get(“สัตว์ที่มี 4 ขา ทุกตัวคือ แมว ปลามี 4 ขา ปลาเป็นแมวหรือไม่”) ผล 8
Get(“ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชำวมองโกล”) ผล 4
*/
function countspace(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      count++;
    }
  }
  return count;
}

console.log('-------------- Question 6 --------------');
console.log(countspace("Hello Thailand.")); 
console.log(countspace("สัตว์ที่มี 4 ขา ทุกตัวคือ แมว ปลามี 4 ขา ปลาเป็นแมวหรือไม่"));  
console.log(countspace("ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชำวมองโกล"));  
console.log('-------------- Question 6 --------------');

/*7. จงเขียน function แทนที่ช่องว่างด้วย“-”
Get(“Hello Thailand.”) ผล“Hello-Thailand.”
Get(“สัตว์ที่มี 4 ขำทุกตัวคือแมว ปลามี 4 ขำปลาเป็นแมวหรือไม่”)
 ผล“สัตว์ที่มี-4-ขำ-ทุกตัวคือ-แมว-ปลามี-4-ขำ-ปลาเป็นแมวหรือไม่”
Get(“ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชาวมองโกล”)
 ผล“ประชากรบนโลก-1-ใน-3-เป็นลูกหลานของชาวมองโกล”
 */

function replacespace(sentence) {
  return sentence.replace(/ /g, '-');  //การใส่ g ใน Regular Expression คือใช้เครื่องหมาย g เป็นตัวแทนของ "global" หากไม่ใส่จะแทนที่วรรคแรกแค่ครั้งเดียว
}
console.log('-------------- Question 7 --------------');
console.log(replacespace("Hello Thailand."));
console.log(replacespace("สัตว์ที่มี 4 ขำทุกตัวคือแมว ปลามี 4 ขำปลาเป็นแมวหรือไม่"));
console.log(replacespace("ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชาวมองโกล"));
console.log('-------------- Question 7 --------------');

/*8. จงสร้าง array ที่เก็บค่าดังนี้   
 ธนาบัตร 1,000 บาท จำนวน 50 ใบ
 ธนาบัตร 500 บาท จำนวน 20 ใบ
 ธนาบัตร 100 บาท จำนวน 15 ใบ
 ธนาบัตร 50 บาท จำนวน 10 ใบ
 ธนาบัตร 20 บาท จำนวน 10 ใบ
 เหรียญ 10 บาท จำนวน 10 เหรียญ
 เหรียญ 5 บาท จำนวน 10 เหรียญ
 เหรียญ 1 บาท จำนวน 1 เหรียญ
 */

 const money = [
  { type: 'ธนาบัตร', value: 1000, quantity: 50 },
  { type: 'ธนาบัตร', value: 500, quantity: 20 },
  { type: 'ธนาบัตร', value: 100, quantity: 15 },
  { type: 'ธนาบัตร', value: 50, quantity: 10 },
  { type: 'ธนาบัตร', value: 20, quantity: 10 },
  { type: 'เหรียญ', value: 10, quantity: 10 },
  { type: 'เหรียญ', value: 5, quantity: 10 },
  { type: 'เหรียญ', value: 1, quantity: 1 }
];
console.log('-------------- Question 8 --------------');
money.forEach(item => {
    console.log(`${item.type} ${item.value} บาท จำนวน ${item.quantity} ${item.type === 'เหรียญ' ? 'เหรียญ' : 'ใบ'}`);
});
console.log('-------------- Question 8 --------------');

//9. จากโจทย์ข้อ 8 นำจำนวนเงินทั้งหมดมาร่วมกันแล้วลบด้วย 20,589

let total = 0;
money.forEach(item => {
  total += item.value * item.quantity;
});

console.log('-------------- Question 9 --------------');
console.log(total -= 20589);
console.log('-------------- Question 9 --------------');

/*10. จงเขียน function สลับตัวเลขเพื่อทำการเข้ารหัสลับของ CIA
 0 1 2 3 4
 5 6 7 8 9
Get(“01234”) ผล 56789
Get(“98654”) ผล 43210
Get(“06284”) ผล 51739
*/

function encodeCIA(numbers) {
  const digitMapping = {
    '0': '5',
    '1': '6',
    '2': '7',
    '3': '8',
    '4': '9',
    '5': '0',
    '6': '1',
    '7': '2',
    '8': '3',
    '9': '4'
  };

  let encoded = '';
  for (let i = 0; i < numbers.length; i++) {
    const digit = numbers[i];
    if (digitMapping.hasOwnProperty(digit)) { //การใช้ hasOwnProperty() เป็นวิธีการตรวจสอบว่าคุณสมบัติหรือ key ที่ต้องการอ้างถึงอยู่ในออบเจ็กต์หรือไม่
      encoded += digitMapping[digit];
    } else {
      encoded += digit;
    }
  }

  return encoded;
}

console.log('-------------- Question 10 --------------');
console.log(encodeCIA("01234"));
console.log(encodeCIA("98654"));
console.log(encodeCIA("06284"));
console.log('-------------- Question 10 --------------');

/*จงเขียน function เมื่ออเมริกาต้องการส่งข้อความไปให้กับประเทศอินเดียแต่ไม่อยากให้ใครรู้ว่าส่งข้อความีอะไรไปอเมริกาจึง
ต้องมีการเข้ารหัสลับโดยใช้ตัวอักษรที่เป็นตรงกันข้าม ภาษาอังกฤษมีทั้งหมด 26 ตัวอักษร A อยู่ตำแหน่งที่ 1 ซึ่งจะคู่กับตัวอักษรที่
อยู่ตำแหน่งที่ 14 นั้นคือ N  ถ้าหากอเมริกาส่งตัวอักษรตัว A แสดงอินเดียต้องรับรู้ว่าเป็น N
A B C D E F G H I J K L M
N O P Q R S T U V W X Y Z
Get(“A”) ผล N
Get(“B”) ผล O
Get(“URYYB VAQVN”) ผล HELLO INDIA
*/

function codeMessage(message) {
  var coded = "";
  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);  // charCodeAt() เป็นคำสั่งในในภาษา JavaScript ซึ่งตัวอักษร A เท่ากับ 65 ไล่บวกเพิ่มไปเรื่อยๆ
    if (charCode >= 65 && charCode <= 90) {
      var shiftedCode = (charCode - 65 + 13) % 26 + 65; //charCode-65+13 เพื่อเลื่อนไป13ตำแหน่งตามโจทย์ แล้วหารด้วย 26 เพื่อให้รีเซ็ตกลับมาวนใหม่ +65 ให้กลับไปนับแบบเดิม
      var codedChar = String.fromCharCode(shiftedCode); // fromCharCode ไว้สำหรับถอดรหัสเป็นตัวอักษร
      coded += codedChar;
    } else {
      coded += message[i];
    }
  }
  return coded;
}

console.log('-------------- Question 11 --------------');
console.log(codeMessage("A"));
console.log(codeMessage("B"));
console.log(codeMessage("URYYB VAQVN"));
console.log('-------------- Question 11 --------------');

/*12. มีหอยทำกอยู่ 1 ตัวอยู่ล่างบ่อน้ำจากก้นบ่อน้ำ ถึง ปากบ่อน้ำมีระยะทางทั้งหมด 57 เมตร
 ตอนกลางวันหอยทำกสามารถเดินขึ้นไปได้ 3 เมตร
 ตอนกลางคืนหอยทำกจะลื่นลงมา 1.5 เมตร
 หอยทำกต้องใช้เวลากี่วันถึงจะเดินกี่วันถึงจะขึ้นมาถึงปากบ่อน้ำได้
 */

function calculateSnailTime() {
  var totalDistance = 57;
  var dayDistance = 3;
  var nightDistance = -1.5;
  var snailPosition = 0;
  var days = 0; //

  while (snailPosition < totalDistance) {
    snailPosition += dayDistance;

    if (snailPosition >= totalDistance) {
      days++;
      break;
    }

    snailPosition += nightDistance;
    days++;
  }

  return days;
}

console.log('-------------- Question 12 --------------');
console.log(calculateSnailTime());
console.log('-------------- Question 12 --------------');

//13. จากข้อที่ 8 จงนำแบงค์ 1000 ออก 5 ใบ แบงค์ 500 ออก 10 ใบ แล้วนำผลรวมจำนวนเงินที่เหลือมาแสดงผล

var banknotes = [
  { value: 1000, quantity: 50 },
  { value: 500, quantity: 20 },
  { value: 100, quantity: 15 },
  { value: 50, quantity: 10 },
  { value: 20, quantity: 10 },
];

var coins = [
  { value: 10, quantity: 10 },
  { value: 5, quantity: 10 },
  { value: 1, quantity: 1 },
];

function calculateRemainingMoney() {
  banknotes[0].quantity -= 5;
  banknotes[1].quantity -= 10;

  var remaining_money = 0;
  for (var i = 0; i < banknotes.length; i++) {
    remaining_money += banknotes[i].value * banknotes[i].quantity;
  }

  for (var j = 0; j < coins.length; j++) {
    remaining_money += coins[j].value * coins[j].quantity;
  }

  console.log(remaining_money);
}

console.log('-------------- Question 13 --------------');
calculateRemainingMoney();
console.log('-------------- Question 13 --------------');

function findEliminatedPlayer() {
  const participants = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "P", "Z", "Joseph"];
  let currentIndex = participants.indexOf("F");
  let count = 0;

  while (participants.length > 1) {
    currentIndex = (currentIndex + 1) % participants.length;
    count++;

    if (count === 333) {
      participants.splice(currentIndex, 1);
      count = 0;
    }
  }

  return participants[0];
}

console.log('-------------- Question 14 --------------');
console.log(findEliminatedPlayer());
console.log('-------------- Question 14 --------------');

function randomizeContestants() {
  const participants = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "P", "Z", "Joseph"];

  // Fisher-Yates shuffle algorithm
  for (let i = participants.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //.floor ใน JavaScript ใช้สำหรับปัดเศษของตัวเลขลงเป็นจำนวนเต็มที่น้อยที่สุด
    [participants[i], participants[j]] = [participants[j], participants[i]];
  }

  return participants;
}

console.log('-------------- Question 15 --------------');
console.log(randomizeContestants());
console.log('-------------- Question 15 --------------');

function findLastSurvivor() {
  const participants = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "P", "Z", "Joseph"];
  let currentIndex = participants.indexOf("F");
  let count = 0;

  for (let i = participants.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [participants[i], participants[j]] = [participants[j], participants[i]];
  }

  while (participants.length > 1) {
    currentIndex = (currentIndex + 1) % participants.length;
    count++;

    if (count === 333) {
      participants.splice(currentIndex, 1);
      count = 0;
    }
  }

  return participants[0];
}

console.log('-------------- Question 16 --------------');
console.log(findLastSurvivor());
console.log('-------------- Question 16 --------------');

console.log('-------------- Question 17 --------------');

function findLastPhone() {
  const phones = [
    { id: 1, battery: 89, standbyTime: 3, callTime: 1, batteryUsage: 0.2 },
    { id: 2, battery: 49, standbyTime: 5, callTime: 1, batteryUsage: 0.4 },
    { id: 3, battery: 78, standbyTime: 2, callTime: 1, batteryUsage: 0.5 },
    { id: 4, battery: 19, standbyTime: 20, callTime: 1, batteryUsage: 0.1 },
    { id: 5, battery: 99, standbyTime: 5, callTime: 1, batteryUsage: 1 },
    { id: 6, battery: 100, standbyTime: 7, callTime: 1, batteryUsage: 1 },
  ];

  let timeLeft = phones.map(phone => {
    let battery = phone.battery;
    let totalTime = 0;

    while (battery > 0) {
      totalTime += phone.standbyTime;
      battery -= phone.standbyTime * phone.batteryUsage;

      if (battery <= 0) {
        break;
      }

      totalTime += phone.callTime;
      battery -= phone.callTime * phone.batteryUsage;
    }

    return { id: phone.id, timeLeft: totalTime };
  });

  timeLeft.sort((a, b) => b.timeLeft - a.timeLeft);

  return timeLeft[0].id;
}

console.log('-------------- Question 18 --------------');
console.log(findLastPhone());
console.log('-------------- Question 18 --------------');

function calculateClockAngle(time) {
  const [hourStr, minuteStr] = time.split(":");
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle = (minute / 60) * 360;

  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}
console.log('-------------- Question 19 --------------');
console.log(calculateClockAngle("09:00"));
console.log(calculateClockAngle("17:30"));
console.log('-------------- Question 19 --------------');
