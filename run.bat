@echo off
echo ====================================
echo  SAFETY-EE SYSTEM - Plan B Media
echo ====================================
echo.
echo กำลังติดตั้ง dependencies...
pip install -r requirements.txt
echo.
echo กำลังเปิดระบบที่ http://localhost:5050
echo กด Ctrl+C เพื่อหยุดระบบ
echo.
python app.py
pause
