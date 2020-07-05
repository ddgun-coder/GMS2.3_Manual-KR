rh._.exports({"0":["game_project_name"],"1":["game_project_name"],"2":["game_project_name"],"3":["\n  ","\n  ","\n  ","This ","read only"," variable returns the display name of your game for the target platform in a \"save-friendly\" format for the target platform. If the display name contains any characters that are not permitted for a file name, they will\n    be replaced automatically with \"_\". The display name can be set in the ","Game Options",". Note that since there are no restrictions on file names for HTML5, this string will probably be the same\n    as that returned by ","game_display_name",".","\n  "," ","\n  ","\n  ","game_project_name","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var file = game_project_name + \".ini\";"," ini_open(file);\n    "," ini_write_real(\"Scores\", \"Highscore\", score);"," ini_close();\n  ","\n  ","The above code gets the project name and uses this to open (or create) an ini file which is then written to.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","game_end","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["game_project_name"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1135"})