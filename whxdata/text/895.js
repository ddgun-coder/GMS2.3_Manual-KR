rh._.exports({"0":["object_set_mask"],"1":["object_set_mask"],"2":["object_set_mask"],"3":["\n  ","\n  ","\n  ","With this function you can set the mask_index of a specific object (for more information on masks see ","The Object Editor","). This means that all instances of this object that are created ","after the mask has been changed","    will be created with this new mask, while instances that are already in the room may not be affected. You can set this to -1 to remove a mask sprite and so default to the mask defined for the sprite of the object (or no masks if no sprite has been\n    chosen).","\n  ","Please note that this is not an instance function! You can set the mask index of individual instances using the ","mask_index"," variable and so have ten instances all with a different\n    mask to the object they are created from, and even if you change the mask index of the object using this function, all instances that are currently in the room will remain as they were, and only instances created after calling the function will start\n    with the new mask.","\n  "," ","\n  ","\n  ","object_set_mask(index, spr);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the object to change.","\n      ","\n      ","\n        ","spr","\n        ","The new sprite to use as the object's mask.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (global.level == 10)","     {","     object_set_mask(obj_Platform, spr_mask_10);","     }","\n  ","The above code checks the value of global variable and then changes the mask index of the object \"obj_Platform\" if it is equal to ten.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_set_persistent","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["object_set_mask"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"895"})