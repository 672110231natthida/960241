function validateDate() {
  const day = parseInt(document.getElementById("day").value.trim(), 10);
  const month = parseInt(document.getElementById("month").value.trim(), 10);
  const buddhistYear = parseInt(document.getElementById("year").value.trim(), 10);

  // ตรวจสอบว่าทุกช่องมีค่าถูกต้อง
  if (isNaN(day) || isNaN(month) || isNaN(buddhistYear)) {
    alert("false");
    return;
  }

  // พ.ศ. เป็นช่วงที่ต้องการ 2540–2568
  if (buddhistYear < 2540 || buddhistYear > 2568) {
    alert("false");
    return;
  }

  // แปลงเป็น ค.ศ.
  const gregYear = buddhistYear - 543;

  // ตรวจสอบจำนวนวันในเดือนนั้น
  const daysInMonth = new Date(gregYear, month, 0).getDate();
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth) {
    alert("false");
    return;
  }

  // สร้างวัน
  const isoDateStr = `${gregYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const date = new Date(isoDateStr);

  // ใช้ Intl เพื่อให้ตรง timezone (Asia/Bangkok)
  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    timeZone: 'Asia/Bangkok'
  }).format(date);

  alert(weekday);
}
