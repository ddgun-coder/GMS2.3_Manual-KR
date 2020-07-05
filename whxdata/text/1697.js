rh._.exports({"0":["gamepad_get_description"],"1":["gamepad_get_description"],"2":["gamepad_get_description"],"3":["\n\n\n\n  ","\n  ","\n  ","This function will return a string with the description of the given gamepad, for example, a PS3 controller may return a string similar to \"PLAYSTATION(R)3 Controller\", or an XBox360 controller could return \"Xbox 360 Controller (XInput\n    STANDARD GAMEPAD)\". This string is hardware dependant and the returned value will depend on the gamepad plugged into the device \"slot\" that is being checked.","\n  "," ","\n  ","\n  ","gamepad_get_description(device);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad \"slot\" to get the name of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var gp_num = gamepad_get_device_count();"," for (var i = 0; i < gp_num; i++;)","    {\n    ","    if gamepad_is_connected(i)","       {\n    ","       draw_text(32, 32 + (i * 32), gamepad_get_description(i));","       }\n    ","    else\n    ","       {\n    ","       draw_text(32, 32 + (i * 32), \"No Gamepad Connected\");","       }\n    ","    }\n  ","\n  ","The above code will loop through all the gamepad slots to check for connected devices and then draw some text to the screen based on whether a gamepad is connected to the slot or not.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_get_button_threshold ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_get_description"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1697"})