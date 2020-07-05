rh._.exports({"0":["steam_ugc_create_query_user"],"1":["steam_ugc_create_query_user,ugc_list_Published,ugc_list_VotedOn,ugc_list_VotedUp,ugc_list_VotedDown,ugc_list_WillVoteLater,ugc_list_Favorited,ugc_list_Subscribed,ugc_list_UsedOrPlayed,ugc_list_Followed,ugc_match_Items,ugc_match_Items_Mtx,ugc_match_Items_ReadyToUse,ugc_match_Collections,ugc_match_Artwork,ugc_match_Videos,ugc_match_Screenshots,ugc_match_AllGuides,ugc_match_WebGuides,ugc_match_IntegratedGuides,ugc_match_UsableInGame,ugc_match_ControllerBindings,ugc_sortorder_CreationOrderDesc,ugc_sortorder_CreationOrderAsc,ugc_sortorder_TitleAsc,ugc_sortorder_LastUpdatedDesc,ugc_sortorder_SubscriptionDateDesc,ugc_sortorder_VoteScoreDesc,ugc_sortorder_ForModeration"],"2":["steam_ugc_create_query_user,ugc_list_Published,ugc_list_VotedOn,ugc_list_VotedUp,ugc_list_VotedDown,ugc_list_WillVoteLater,ugc_list_Favorited,ugc_list_Subscribed,ugc_list_UsedOrPlayed,ugc_list_Followed,ugc_match_Items,ugc_match_Items_Mtx,ugc_match_Items_ReadyToUse,ugc_match_Collections,ugc_match_Artwork,ugc_match_Videos,ugc_match_Screenshots,ugc_match_AllGuides,ugc_match_WebGuides,ugc_match_IntegratedGuides,ugc_match_UsableInGame,ugc_match_ControllerBindings,ugc_sortorder_CreationOrderDesc,ugc_sortorder_CreationOrderAsc,ugc_sortorder_TitleAsc,ugc_sortorder_LastUpdatedDesc,ugc_sortorder_SubscriptionDateDesc,ugc_sortorder_VoteScoreDesc,ugc_sortorder_ForModeration"],"3":["\n  ","\n  ","\n  ","This function can be used to query the UGC data base. The function automatically uses the default ID for the app, user and assumes that the query is being done by the consumer (rather than the creator). The function requires you to use the following\n    constants for the type of data to query, the type of item to query and the order in which the returned items will be sorted, as well as a page number - note that a query will return a ","maximum"," number of 50 items.","\n  "," ","\n  ","\n    ","\n      ","\n        ","List Type Constant","\n        ","Description","\n      ","\n      ","\n        ","ugc_list_Published","\n        ","See the ","Steam Documentation",".","\n      ","\n      ","\n        ","ugc_list_VotedOn","\n        ","-","\n      ","\n      ","\n        ","ugc_list_VotedUp","\n        ","-","\n      ","\n      ","\n        ","ugc_list_VotedDown","\n        ","-","\n      ","\n      ","\n        ","ugc_list_WillVoteLater","\n        ","-","\n      ","\n      ","\n        ","ugc_list_Favorited","\n        ","-","\n      ","\n      ","\n        ","ugc_list_Subscribed","\n        ","-","\n      ","\n      ","\n        ","ugc_list_UsedOrPlayed","\n        ","-","\n      ","\n      ","\n        ","ugc_list_Followed","\n        ","-","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Match Type Constant","\n        ","Description","\n      ","\n      ","\n        ","ugc_match_Items","\n        ","See the ","Steam Documentation",".","\n      ","\n      ","\n        ","ugc_match_Items_Mtx","\n        ","-","\n      ","\n      ","\n        ","ugc_match_Items_ReadyToUse","\n        ","-","\n      ","\n      ","\n        ","ugc_match_Collections","\n        ","-","\n      ","\n      ","\n        ","ugc_match_Artwork","\n        ","-","\n      ","\n      ","\n        ","ugc_match_Videos","\n        ","-","\n      ","\n      ","\n        ","ugc_match_Screenshots","\n        ","-","\n      ","\n      ","\n        ","ugc_match_AllGuides","\n        ","-","\n      ","\n      ","\n        ","ugc_match_WebGuides","\n        ","-","\n      ","\n      ","\n        ","ugc_match_IntegratedGuides","\n        ","-","\n      ","\n      ","\n        ","ugc_match_UsableInGame","\n        ","-","\n      ","\n      ","\n        ","ugc_match_ControllerBindings","\n        ","-","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Sort Order Constant","\n        ","Description","\n      ","\n      ","\n        ","ugc_sortorder_CreationOrderDesc","\n        ","See the ","Steam Documentation",".","\n      ","\n      ","\n        ","ugc_sortorder_CreationOrderAsc","\n        ","-","\n      ","\n      ","\n        ","ugc_sortorder_TitleAsc","\n        ","-","\n      ","\n      ","\n        ","ugc_sortorder_LastUpdatedDesc","\n        ","-","\n      ","\n      ","\n        ","ugc_sortorder_SubscriptionDateDesc","\n        ","-","\n      ","\n      ","\n        ","ugc_sortorder_VoteScoreDesc","\n        ","-","\n      ","\n      ","\n        ","ugc_sortorder_ForModeration","\n        ","-","\n      ","\n    ","\n  ","\n  "," The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function\n    ","steam_ugc_send_query()"," - and you can use further ","steam_ugc_query_*()"," functions to refine the search request before it is actually sent.","\n  "," ","\n  ","\n  ","steam_ugc_create_query_user(list_type, match_type, sort_order, page);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","list_type","\n        ","The type of data list to create (see constants listed below).","\n      ","\n      ","\n        ","match_type","\n        ","The type of UGC items to query (see constants listed below).","\n      ","\n      ","\n        ","sort_order","\n        ","The way that the data should be ordered (see constants listed below).","\n      ","\n      ","\n        ","page","\n        ","The page number to query.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Query Handle","\n  "," ","\n  ","\n  ","query_handle = steam_ugc_create_query_user(ugc_list_Published, ugc_match_Items, ugc_sortorder_TitleAsc, 1);","\n  ","The above code creates a query request and stores it's handle in a variable for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_create_query_user_ex","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_create_query_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2320"})