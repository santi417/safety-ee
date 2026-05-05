# SAFETY-EE SYSTEM

ระบบตรวจสอบงานไฟฟ้าป้ายโฆษณา (Inspection + Training) — Plan B Media Standard

## Quick Start

เปิดไฟล์ `SAFETY_EE.html` ในเบราว์เซอร์ — ใช้งานได้ทันที ไม่ต้องติดตั้งอะไร

## Features

- ✅ ตรวจ 7 ขั้นตอนตามมาตรฐาน (Code ID, PPE, Electrical, Equipment, Location, Result, Training)
- 📷 อัปโหลดรูปหลักฐาน 6 จุด (รองรับการถ่ายผ่านกล้องมือถือ)
- ⚙️ Master Data จัดการเอง + Import/Export CSV
- 📤 Sync ขึ้น Google Sheets อัตโนมัติ (พร้อม Apps Script ในแอป)
- 📊 Export Excel 3 Sheet (Inspection / Training Matrix / Summary)
- 💾 บันทึก localStorage ปิด-เปิด browser ข้อมูลยังอยู่
- 🎓 Training Auto Trigger ผูกกับ Training Matrix อัตโนมัติ

## Files

| File | Purpose |
|------|---------|
| `SAFETY_EE.html` | Standalone web app (เปิดใช้งานได้เลย) |
| `app.py` | Flask server version (ทางเลือก) |
| `requirements.txt` | Python dependencies |
| `run.bat` | เปิด Flask server บน Windows |

## Deploy

- **Netlify Drop**: ลาก `SAFETY_EE.html` ไปที่ [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: Settings → Pages → main branch
