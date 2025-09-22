// Dummy attendance records
const attendanceRecords = [
  {
    student_id: "S101",
    name: "Ravi Kumar",
    class: "5A",
    bus_id: "BUS-12",
    action: "IN",
    timestamp: new Date("2025-09-22T08:10:00"),
  },
  {
    student_id: "S101",
    name: "Ravi Kumar",
    class: "5A",
    bus_id: "BUS-12",
    action: "OUT",
    timestamp: new Date("2025-09-22T16:05:00"),
  },
  {
    student_id: "S202",
    name: "Meera",
    class: "6B",
    bus_id: "BUS-15",
    action: "IN",
    timestamp: new Date("2025-09-22T08:20:00"),
  },
];

function getAttendance(date = null) {
  if (!date) return attendanceRecords;
  return attendanceRecords.filter(
    (rec) => rec.timestamp.toISOString().split("T")[0] === date
  );
}

module.exports = { getAttendance };
