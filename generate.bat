@echo off
setlocal enabledelayedexpansion

:: Change this to the maximum number you want
set MAX=174


:: Set target directory (relative or absolute path)
set TARGET=data-asia/SV/SV11W

:: Make sure target exists
if not exist "%TARGET%" mkdir "%TARGET%"

for /L %%i in (1,1,%MAX%) do (
    set "NUM=00%%i"
    set "NUM=!NUM:~-3!"
    if not exist "%TARGET%\!NUM!.ts" (
        echo. > "%TARGET%\!NUM!.ts"
        echo Created %TARGET%\!NUM!.ts
    ) else (
        echo Skipped %TARGET%\!NUM!.ts (already exists)
    )
)

endlocal
echo Done.
pause