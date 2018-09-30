var ACC = {};

ACC.glp = function(n) {
    var d = n;
    if (d < 0) d = -d;

    switch(true) {
	case d==1: return 0; break;
	case d!=1: return 1; break;
    }
    return 0;
};

ACC.MSG = {};
ACC.MSG['error'] = {};
ACC.MSG['error']['unk_params'] = 'Unknown or bad argument.';
ACC.MSG['error']['not_found'] = 'Information not found.';
ACC.MSG['error']['deny'] = 'Permission denied to access content.';
ACC.MSG['error']['no_theme'] = 'No widget configuration theme to save.';
ACC.MSG['error']['oops'] = 'Oops! We\'re sorry... An internal error occurred.<br>Error notification sent to the Customer Support Team.<br>Please try again later.';
ACC.MSG['error']['balance_not_enough'] = 'Not enough your account balance.';
ACC.MSG['error']['order_due'] = 'Acceptable payment deadlines expired.';
ACC.MSG['error']['need_manager_opt'] = 'Reporting denied.<br>Manager privileges required.<br>Option is specified under «Users and Groups»'
ACC.MSG['error']['for_priv_user_only'] = 'Administrator or manager privileges are required.';

ACC.MSG['info'] = {};
ACC.MSG['info']['conf_am'] = '%person% already in the conference.';
ACC.MSG['info']['conf_closed'] = 'Conference has finished.';
ACC.MSG['info']['conf_refused'] = '%person% refused invitation.';
ACC.MSG['info']['dlg_closed'] = 'Dialog has finished.';
ACC.MSG['info']['visitor_queued'] = 'Visitor is queued. Check queue «%queue%»';
ACC.MSG['info']['question_asked'] = 'Your question referred to the site administrator.<br>The decision to add the question and answer in the general list may take some time.<br><br>Thanks for Your attention!';
ACC.MSG['info']['NOT_USED_license_expired'] = 'License has expired.<br>To keep service available please <a href="#my_service_package">renew</a> current package or <a href="#online_store">buy</a> new.';
ACC.MSG['info']['upgrade_package'] = 'Existing licenses is not enough to activate WEB-Online mode.<br>To manage your services and licenses go to the control panel.';
ACC.MSG['info']['no_active_package'] = 'Activate WEB-Online mode has been rejected - no valid service plan.<br>To manage your services and licenses go to the control panel.';
ACC.MSG['info']['upgrade_options'] = 'Existing licenses for options is not enough.<br>To manage your services and licenses go to the control panel.';
ACC.MSG['info']['webonline_turned_off'] = 'Please turn on WEB-ONLINE mode to send messages to visitors.';
ACC.MSG['info']['size_limit'] = 'Request limit exceeded. You may try a little short request.';
ACC.MSG['info']['visitor_in_chat'] = 'The visitor already has a chat offer.';
ACC.MSG['info']['webonline_not_stop1'] = 'You have a chat with the visitor.<br>All chats with the visitors must be finished before WEB-ONLINE mode turned off.';
ACC.MSG['info']['webonline_not_stopN'] = 'You have the chats with the visitors.<br>All chats with the visitors must be finished before WEB-ONLINE mode turned off.';
ACC.MSG['info']['phrase_already_exists'] = 'This phrase has been added.';
ACC.MSG['info']['visitor_left_site_1'] = 'The visitor left the site, the message cannot be delivered.';
ACC.MSG['info']['admin_profile_not_complete'] = 'User profile is not completed. First of all, you should fill out the profile.';
ACC.MSG['info']['room_autotransfer'] = 'The widget automatically transferred this conversation to a virtual queue, because the visitor did not receive confirmation of the message delivery during the course of %val1% seconds.';

ACC.CUR = {};
ACC.CUR['RUB'] = 'rub';
ACC.CUR['USD'] = 'USD';
ACC.CUR['EUR'] = 'euro';
ACC.CUR['KZT'] = 'tg';

ACC.PLATFORM = {};
ACC.PLATFORM['LINUX'] = ['Linux version', 'fa fa-linux'];
ACC.PLATFORM['WIN'] = ['Windows version', 'fa fa-windows'];

ACC.CONTACT_TYPES = [];
ACC.CONTACT_TYPES[0] = {'type': 'tel', 'name':'business_phone', 'fn':'Business phone', 'ph':''};
ACC.CONTACT_TYPES[1] = {'type': 'tel', 'name':'mobile_phone', 'fn':'Mobile phone', 'ph':''};
ACC.CONTACT_TYPES[2] = {'type': 'tel', 'name':'personal_phone', 'fn':'Personal phone', 'ph':''};
ACC.CONTACT_TYPES[3] = {'type': 'tel', 'name':'fax_phone', 'fn':'Fax', 'ph':''};
ACC.CONTACT_TYPES[4] = {'type': 'tel', 'name':'home_phone', 'fn':'Home phone', 'ph':''};
ACC.CONTACT_TYPES[5] = {'type': 'tel', 'name':'phone', 'fn':'Phone', 'ph':'Phone number', "com":1};
ACC.CONTACT_TYPES[6] = {'type': 'email', 'name':'business_email', 'fn':'Business Email', 'ph':''};
ACC.CONTACT_TYPES[7] = {'type': 'email', 'name':'personal_email', 'fn':'Personal Email', 'ph':''};
ACC.CONTACT_TYPES[8] = {'type': 'email', 'name':'email', 'fn':'Email', 'ph':'Email address', "com":1};
ACC.CONTACT_TYPES[9] = {'type': 'position', 'name':'position', 'fn':'Position', 'ph':''};
ACC.CONTACT_TYPES[10] = {'type': 'im', 'name':'skype', 'fn':'Skype', 'ph':'', "com":1};
ACC.CONTACT_TYPES[11] = {'type': 'im', 'name':'msn', 'fn':'MSN', 'ph':''};
ACC.CONTACT_TYPES[12] = {'type': 'web', 'name':'web_address', 'fn':'WEB', 'ph':'Website address', "com":1};
ACC.CONTACT_TYPES[13] = {'type': 'address', 'name':'business_address', 'fn':'Address', 'ph':'Business address', "com":1};
ACC.CONTACT_TYPES[14] = {'type': 'social', 'name':'facebook', 'fn':'Facebook', 'ph':'Facebook page', "com":1};
ACC.CONTACT_TYPES[15] = {'type': 'social', 'name':'vk', 'fn':'Vkontakte', 'ph':'VK page'};
ACC.CONTACT_TYPES[16] = {'type': 'other', 'name':'other', 'fn':'Other', 'ph':'', "com":1};

ACC.CTD = {};
ACC.CTD['tel'] = 'Phone';
ACC.CTD['email'] = 'Email';
ACC.CTD['position'] = 'Position';
ACC.CTD['im'] = 'Messenger';
ACC.CTD['web'] = 'Website';
ACC.CTD['address'] = 'Address';
ACC.CTD['social'] = 'Social network';
ACC.CTD['other'] = 'Other';

// Admin Exit Cause
ACC.MSG['EC1000'] = 'Normal exit';
ACC.MSG['EC1010'] = 'Multiuse';
ACC.MSG['EC1020'] = 'Oops, system';
ACC.MSG['EC1030'] = 'Account deleted';
ACC.MSG['EC1040'] = 'Account blocked';

ACC.MSG['edit_box'] = {};
ACC.MSG['edit_box']['ch_vnote'] = 'Visitor\'s Short Note';
ACC.MSG['edit_box']['saving'] = 'Saving';
ACC.MSG['edit_box']['addition'] = 'Addition';
ACC.MSG['edit_box']['ld_new_page'] = 'Add New Page URL Pattern';
ACC.MSG['edit_box']['ld_upd_page'] = 'Change Page URL Pattern';

ACC.MSG['start_tag'] = {};
ACC.MSG['start_tag']['___ac_link___'] = 'Open Link';
ACC.MSG['start_tag']['___hello___'] = 'Welcome';
ACC.MSG['start_tag']['___im_chat___'] = 'Message';
ACC.MSG['start_tag']['___im_lam___'] = 'Message';
ACC.MSG['start_tag']['___reopen___'] = 'Reopen';
ACC.MSG['start_tag']['___direct_chat___'] = 'Direct Chat';
ACC.MSG['start_tag']['___direct_chat_link___'] = 'Direct Chat (link)';
ACC.MSG['start_tag']['___start_lam___'] = 'Leave a Message';
ACC.MSG['start_tag']['___cv_chat___'] = 'Catch on exit';
ACC.MSG['start_tag']['___cv_lam___'] = 'Catch on exit';
///??ACC.MSG['start_tag']['___open_jmitty___'] = 'Site Navigation';

ACC.MSG['mc'] = {};
ACC.MSG['mc']['domain_uni_self'] = 'This site already registered.';
ACC.MSG['mc']['domain_uni_other'] = 'This site already registered with other customer.<br>If you are site owner - follow <a href="#" class="dl"><span>instructions</span></a>.';
ACC.MSG['mc']['domainzone_uni'] = 'This site already bind to zone.';

ACC.MSG['hd_statuses'] = {};
ACC.MSG['hd_statuses']['jhd-def-status-new'] = 'New';
ACC.MSG['hd_statuses']['jhd-def-status-open'] = 'Open';
ACC.MSG['hd_statuses']['jhd-def-status-in-progress'] = 'In Progress';
ACC.MSG['hd_statuses']['jhd-def-status-reopened'] = 'Reopened';
ACC.MSG['hd_statuses']['jhd-def-status-resolved'] = 'Resolved';
ACC.MSG['hd_statuses']['jhd-def-status-closed'] = 'Closed';

ACC.MSG['hd_priorities'] = {};
ACC.MSG['hd_priorities']['jhd-def-priority-low'] = 'Low';
ACC.MSG['hd_priorities']['jhd-def-priority-normal'] = 'Normal';
ACC.MSG['hd_priorities']['jhd-def-priority-high'] = 'High';
ACC.MSG['hd_priorities']['jhd-def-priority-critical'] = 'Critical';

ACC.MSG['hd_types'] = {};
ACC.MSG['hd_types']['jhd-def-type-feature-request'] = 'Feature Request';
ACC.MSG['hd_types']['jhd-def-type-bug'] = 'Bug';
ACC.MSG['hd_types']['jhd-def-type-other'] = 'Not defined';

ACC.L = [];
// title
ACC.L[0] = 'Contact Center';
// login form
ACC.L[1] = 'Username / Email';
ACC.L[2] = 'Password';
ACC.L[3] = 'Sign In';
ACC.L[4] = '<a class="link-s1" href="#">Forgot password?</a>';

// CC profile
ACC.L[5] = 'Visitors';
ACC.L[6] = 'This account already logged in.<br>If you continue, logged session will dropped.<br><br>Do you want to continue?';
ACC.L[7] = 'Guest';
ACC.L[8] = 'Visitor';
ACC.L[9] = 'Time on site';
ACC.L[10] = 'Current url';
ACC.L[11] = 'Tasks';
ACC.L[12] = '<a class="link-s1" href="#">Sign up</a> or <a class="link-s1" href="#">Learn more</a>';
ACC.L[13] = 'Error: WebSocket is not supported by this browser.<br>Please upgrade your browser or download more perfective.';
ACC.L[14] = 'language';

// Then no visitors online, no any person in group etc...
ACC.L[15] = 'None';

// CC Login book
ACC.L[16] = 'Accounts';
ACC.L[17] = 'Empty';

// Visitor OS and Browser
ACC.L[18] = 'Unknown';
ACC.L[19] = 'Unknown';

// GEO location unknown
ACC.L[20] = 'Unknown';

// Visitors table fields names
ACC.L[21] = 'Visitor';
ACC.L[22] = 'Location';
ACC.L[23] = 'Online';
ACC.L[24] = 'Visits';
ACC.L[25] = 'Views';
ACC.L[26] = 'Chats';
ACC.L[27] = 'Site and page';
ACC.L[28] = 'Referrer';
ACC.L[266] = 'Calls';

// Visitors table fields descriptions
ACC.L[29] = '';	// -------not used
ACC.L[30] = '';
ACC.L[31] = '';
ACC.L[32] = '';
ACC.L[33] = '';
ACC.L[34] = '';
ACC.L[35] = '';
ACC.L[36] = '';

// Months for: 1st May, 20 February ..
ACC.L[37] = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
// Months for set period: 1st May, 20 February .. // See Russion langauge
ACC.L[79] = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
ACC.L[38] = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
// Today, Yesterday for date
ACC.L[260] = 'Today';
ACC.L[261] = 'Yesterday';
ACC.L[262] = 'at';

ACC.L[39] = 'Delivered';
ACC.L[40] = 'Read';
ACC.L[41] = 'typing';

// 110/10 system message
ACC.L[42] = 'Continue';

// One or more messages
ACC.L[43] = 'Message';
ACC.L[44] = 'Messages';
ACC.L[45] = 'Messages';

// Control of dialog room
ACC.L[46] = 'Close conversation';
ACC.L[47] = 'Transfer the Conversation';
ACC.L[100] = 'Transfer the Conversation';
ACC.L[434] = 'Tags';
ACC.L[48] = 'Invite to the Conference';

// Status online/offline
ACC.L[49] = 'offline';

// Conference
ACC.L[50] = 'You have been invited to conference by %person%.<br><br>Do you accept invitation?';
ACC.L[51] = 'Accept';
ACC.L[52] = 'Refuse';

// Title of message
ACC.L[53] = 'Success';
ACC.L[54] = 'Error';
ACC.L[55] = 'Access Denied';
ACC.L[56] = 'Warning';
ACC.L[57] = 'Information';
ACC.L[58] = 'Question';
ACC.L[110] = 'Confirmation';

// Button on messages
ACC.L[59] = 'OK';
ACC.L[60] = 'Close';
ACC.L[61] = 'Yes';
ACC.L[62] = 'No';

ACC.L[124] = 'Cancel';
ACC.L[125] = 'Save';
ACC.L[194] = 'Send';

// Additional information for message, appends ": " to the end
ACC.L[63] = 'Details';

// 142/10 system message
ACC.L[64] = '%person% in the conference';
ACC.L[65] = '%person% leave the conference';

// Show conference participants btn & title
ACC.L[66] = 'Conference participants';

// Conference invitation message (accept/refuse)
ACC.L[67] = 'Conference invitation';

// TAB title
ACC.L[68] = 'Conference';

// Conversations history
ACC.L[69] = 'Chats';

ACC.L[70] = 'Choose a time period';
ACC.L[71] = 'Month';
ACC.L[72] = 'This';
ACC.L[73] = 'Show history for current month';
ACC.L[74] = 'Previous';
ACC.L[75] = 'Show history for previous month';
ACC.L[76] = 'Period';
ACC.L[77] = 'From';
ACC.L[78] = 'To';
// 79 - months
ACC.L[80] = 'Search';

// Search conversation history
ACC.L[81] = 'Chats Not Found';
ACC.L[82] = 'Visits Not Found';

ACC.L[83] = 'Visits';
ACC.L[84] = 'Choose a time period';

// Visitor info fields
ACC.L[85] = 'Operating System';
ACC.L[86] = 'Browser';

ACC.L[87] = 'Edit Comment';

//  Offline Messages
ACC.L[88] = 'Quick Access';
ACC.L[89] = 'All Messages';
ACC.L[116] = 'Offline Messages';

// Days of week
ACC.L[90] = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
ACC.L[91] = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

ACC.L[92] = 'New';
ACC.L[93] = 'Information';

// Offline message control buttons
ACC.L[94] = 'Close message';

// Offline message viewed|closed by PERSON
ACC.L[95] = 'Seen by';
ACC.L[96] = 'Closed by';

// Queues for incoming chats
ACC.L[97] = 'New Conversations';

// If new room without domain - display as internal. May of from CC agent to admins queue
ACC.L[98] = 'Internal message';

// 150/10 system message
ACC.L[99] = '%person% is Online';

//ACC.L[100] = ''; // See 47, Russian lang

ACC.L[101] = 'Transfer to the Queue';

ACC.L[102] = 'End of Conference';
ACC.L[103] = 'End of Conversation';

// Phrases & FaQ
ACC.L[104] = 'Phrases';
ACC.L[105] = 'Questions';
ACC.L[106] = 'Common';
ACC.L[107] = 'Personal';
ACC.L[108] = 'Remove';
ACC.L[109] = 'Add';
// 110 -> 58
ACC.L[111] = 'Delete the phrase?';
ACC.L[112] = 'Frequently asked Questions';
ACC.L[113] = 'Ask a question';
ACC.L[114] = 'Send';	// Using as button label, to send form to server
ACC.L[115] = 'Please type your question';
// 116 -> 89
ACC.L[117] = 'Suggestion Book';
ACC.L[118] = 'Email';
ACC.L[119] = 'Phone';
ACC.L[120] = 'Add Comment';
ACC.L[121] = 'Hide Comment Form';
ACC.L[122] = 'Type Your Comment here';
ACC.L[123] = 'Send Comment';
// 124 - 125 -> 62
ACC.L[126] = 'Change Visitor\'s Note';
ACC.L[127] = 'IP Address';

ACC.L[128] = 'Conversation';
ACC.L[129] = 'Conversations';
ACC.L[130] = 'Conversations';

ACC.L[131] = 'Found ';
ACC.L[132] = 'Found ';
ACC.L[133] = 'Found ';

ACC.L[134] = 'Found ';	// Found Х Visit (s)
ACC.L[135] = 'Found ';
ACC.L[136] = 'Found ';

ACC.L[137] = 'Visit';
ACC.L[138] = 'Visits';
ACC.L[139] = 'Visits';

ACC.L[140] = 'View';
ACC.L[141] = 'Views';
ACC.L[142] = 'Views';

// visitor source
ACC.L[143] = 'Direct referral';
ACC.L[144] = 'Chat not Started';
ACC.L[145] = 'Chat Starting Page';
ACC.L[146] = 'Chat Start Tag';
ACC.L[147] = 'Source';
ACC.L[148] = 'Campaign, keyword';
ACC.L[149] = 'UTM: Source';
ACC.L[150] = 'UTM: Medium';
ACC.L[151] = 'UTM: Campaign';
ACC.L[152] = 'UTM: Term';
ACC.L[153] = 'UTM: Content';
ACC.L[154] = 'Referral';

ACC.L[155] = 'Visitor Pages Navigation';
ACC.L[156] = 'Conversation Start';

ACC.L[211] = 'sec';
ACC.L[212] = 'secs';
ACC.L[213] = 'secs';

ACC.L[157] = 'min';
ACC.L[158] = 'mins';
ACC.L[159] = 'mins';
ACC.L[160] = 'hour';
ACC.L[161] = 'hours';
ACC.L[162] = 'hours';
ACC.L[163] = 'day';
ACC.L[164] = 'days';
ACC.L[165] = 'days';

ACC.L[166] = 'Online now';
ACC.L[167] = 'Open Page';
ACC.L[168] = 'View Page';

ACC.L[169] = 'Forms';
ACC.L[170] = 'Forms and Collected Information';
ACC.L[171] = 'Offer the visitor fill out this form'; // Second the or a? Konkretnaya form i konkretniy posetitel
ACC.L[172] = 'Offer the visitor refill this form'; // Second the or a? Konkretnaya form i konkretniy posetitel
ACC.L[173] = 'Form to Fill Out';
ACC.L[174] = 'Form is Filled';

// 120/10 system message
ACC.L[175] = '%person% has closed the dialog';

ACC.L[176] = 'Access to services restricted. No valid license available.';
ACC.L[177] = 'Users with the manager or administrator option can manage services and licenses.';
ACC.L[178] = 'Open <a class="dl" href="#">Control Panel</a>';

ACC.L[179] = 'Service Center';
ACC.L[180] = 'Call Requests';
ACC.L[181] = 'Settings';
// Group label
ACC.L[182] = 'Analysis of Effectiveness';
ACC.L[183] = 'Statistics';
// Group label
ACC.L[184] = 'Technical Support';
ACC.L[185] = 'Tickets';
ACC.L[186] = 'New Ticket';
ACC.L[187] = 'Work Activities';
ACC.L[188] = 'Ideas and Suggestions';
ACC.L[189] = 'Online Store';
ACC.L[190] = 'Control Panel';
ACC.L[191] = 'WEB-ONLINE';
ACC.L[192] = 'No Information';
ACC.L[193] = 'WEB-ONLINE mode turned off';
// 194 -> 62
ACC.L[195] = 'Send Invoice to Email';
ACC.L[196] = 'Email address';
ACC.L[197] = 'The Email Address field is empty';
ACC.L[198] = 'Email address with mistake(s)';
ACC.L[199] = 'Today';
ACC.L[200] = 'Tomorrow';
ACC.L[201] = 'Between ';
// and, до
ACC.L[202] = ' and ';
ACC.L[203] = 'Visitor\'s Time Zone';
ACC.L[204] = 'Visitor\'s Local Time';
ACC.L[205] = 'Creation Time';
ACC.L[206] = 'Visitor Information';
ACC.L[207] = 'Request';
// 122/10 system message
ACC.L[208] = '%person% has opened the dialog';
ACC.L[209] = 'Reporting';
ACC.L[210] = ['Poor', 'Average', 'Good', 'Very good', 'Excellent'];
// 211,212,213 go to 157
ACC.L[214] = 'of';
ACC.L[215] = 'h';
ACC.L[216] = '';
ACC.L[217] = 'sec';
ACC.L[218] = 'min';
ACC.L[219] = 'User manual';
ACC.L[220] = 'Please Wait ';
ACC.L[221] = 'as we process your request...';
ACC.L[222] = 'Total';
ACC.L[223] = 'All Sites';
ACC.L[224] = 'All';
ACC.L[225] = 'Visitor Information';
ACC.L[226] = 'Loading...';

ACC.L[227] = 'Today';
ACC.L[228] = 'Yesterday';
ACC.L[229] = 'Last 7 Days';
ACC.L[230] = 'Last 30 Days';
ACC.L[231] = 'This Month';
ACC.L[232] = 'Last Month';
ACC.L[233] = 'Date / Time';
ACC.L[234] = 'Visitor';
ACC.L[235] = 'Page';

ACC.L[236] = 'Information';
ACC.L[237] = 'Counters';
ACC.L[238] = 'Source';
ACC.L[239] = 'Block';
ACC.L[240] = 'Block for one day';
ACC.L[241] = 'Block for one week';
ACC.L[242] = 'Note...';
// OS
ACC.L[243] = 'Not defined';
// Browser
ACC.L[244] = 'Not defined';
// Visitor Status with Capital letter
ACC.L[245] = 'Left the site';
// Visits, Views, Chats, Calls
ACC.L[246] = 'Visit';
ACC.L[247] = 'Visits';
ACC.L[248] = 'Visits';
ACC.L[249] = 'View';
ACC.L[250] = 'Views';
ACC.L[251] = 'Views';
ACC.L[252] = 'Chat';
ACC.L[253] = 'Chats';
ACC.L[254] = 'Chats';
ACC.L[255] = 'Call';
ACC.L[256] = 'Calls';
ACC.L[257] = 'Calls';
// and, и
ACC.L[258] = ' and ';
ACC.L[259] = 'on site';
// 260,261 - today, yesterday
// 262 - at
ACC.L[263] = 'Last visit';
ACC.L[264] = 'Visited';
ACC.L[265] = 'Time visiting';
// 266 - Calls; See [28]
ACC.L[267] = 'UTM Source';
ACC.L[268] = 'UTM Campaign';
ACC.L[269] = 'UTM Medium';
ACC.L[270] = 'UTM Content';
ACC.L[271] = 'UTM Term';
ACC.L[272] = 'Referrer';
// Page
ACC.L[273] = 'Untitled';

ACC.L[274] = 'left the site';
ACC.L[275] = 'Unblock';
ACC.L[276] = 'Unblock right now';

ACC.L[277] = 'Previous Chat';
ACC.L[278] = 'Current Chat';

ACC.L[279] = 'Send';
ACC.L[280] = 'Type a message and hit Enter';
ACC.L[281] = 'Visits History';
ACC.L[282] = 'Chat History';
ACC.L[283] = 'Duration';
ACC.L[284] = 'Messages';
ACC.L[285] = 'Rating';
ACC.L[286] = 'The form is not filled';
ACC.L[287] = 'Form was sent successfully';
ACC.L[288] = 'User Information';
ACC.L[289] = 'Received chats';
ACC.L[290] = 'Missed conversations';
ACC.L[291] = 'Conversations without answer';
ACC.L[292] = 'Rating';
ACC.L[293] = 'Voting';
ACC.L[294] = 'Average response time';
ACC.L[295] = 'Average reaction speed';
// Instead undefined or empty names
ACC.L[296] = '<span style="opacity:0.5;">...not defined...</span>';
ACC.L[297] = 'Name';
ACC.L[298] = 'Comments';
ACC.L[299] = 'Site';
ACC.L[300] = 'Queue';
ACC.L[301] = 'Visitor suggestion';
ACC.L[302] = 'Post';
ACC.L[303] = 'Publish';
ACC.L[304] = 'Suggestion';
ACC.L[305] = 'New';
ACC.L[306] = 'Not published';
ACC.L[307] = 'Published';
ACC.L[308] = 'Hidden';
// next two reserved
ACC.L[309] = '';
ACC.L[310] = '';
ACC.L[311] = 'Hide';
ACC.L[312] = 'Call time';
ACC.L[313] = 'Time left';
ACC.L[314] = 'Time to call';
ACC.L[315] = 'It\'s time to call the visitor.';
ACC.L[316] = 'Close request';
ACC.L[317] = 'Less than minute';

ACC.L[318] = 'Log Out';
ACC.L[319] = 'Sound notification';
ACC.L[320] = 'Your browser not support native JSON.<br>Upgrade current or download other modern browser.';
ACC.L[321] = 'Wrong username or password';
ACC.L[322] = ['Account Blocked', 'The session was interrupted for security reasons.<br>Account has been blocked by administrator.'];
ACC.L[323] = ['Account Closed', 'The session was interrupted for security reasons.<br>Account has been closed by administrator.'];
ACC.L[324] = 'Account Blocked';
ACC.L[325] = 'Forgot your password?';
ACC.L[326] = 'Password Recovery';
ACC.L[327] = 'Enter the Email address you registered with';
ACC.L[328] = 'Send Email';
ACC.L[329] = 'Email address';
ACC.L[330] = 'Return to Sign In';
ACC.L[331] = 'Incorrect email address';
ACC.L[332] = 'Checking...';
ACC.L[333] = 'Recovery temporarily unavailable<br>Please try again later';
ACC.L[334] = 'Email is not registered';
ACC.L[335] = 'Email sent successfully';
ACC.L[336] = ['Successfully Logged out', 'You have successfully logged out of your account.'];
ACC.L[337] = ['Successfully Logged out', 'The user logged in from another device.'];
ACC.L[338] = 'Communication with the service failed.<br>Some possible reasons: the absence of the Internet, temporary work at the service provider.<br><br>We recommend to try to Sign In again.';
ACC.L[339] = 'News and Events';
ACC.L[340] = 'Keep up to date with our latest news stories and events';
ACC.L[341] = 'Show more';
ACC.L[342] = 'No more news';
ACC.L[343] = 'You have new notification';
ACC.L[344] = 'Notifications';
ACC.L[345] = 'Take into account';
ACC.L[346] = 'No more notifications';
ACC.L[347] = 'No news';
ACC.L[348] = 'No notifications';
ACC.L[349] = 'Open';
ACC.L[350] = 'Start Chat';
ACC.L[351] = 'Robot';
ACC.L[352] = 'Attachments';
ACC.L[353] = 'byte(s)';
ACC.L[354] = 'KB';
ACC.L[355] = 'MB';
ACC.L[356] = 'size'; /* Total files: 2, size 15 MB */
ACC.L[357] = 'Total files';
ACC.L[358] = 'Attached files will be stored for 30 days';
ACC.L[359] = 'The upload was aborted by user';
ACC.L[360] = 'Attachments size too big.<br>Try less then 20 MB';
ACC.L[361] = 'Error when uploading. Upload canceled';
ACC.L[362] = 'B';
ACC.L[363] = 'Attachments upload completes';
ACC.L[364] = 'Upload attachment possible after conversation established';
ACC.L[365] = 'Please wait while attachment upload';
ACC.L[366] = 'Sender';
ACC.L[367] = 'Uploading';
ACC.L[368] = '%p%% Complete';
ACC.L[369] = 'Placing attachments to the cloud, please wait ...';
ACC.L[370] = 'Some of the attachment files have the same name (%n%)<br><br>Please upload them separately.';
ACC.L[371] = 'Too many files for simultaneous upload.<br>Acceptable upload up to 10 files at once.';
ACC.L[372] = 'Uploading information has zero size. Loading stopped.';
ACC.L[373] = 'Cancel';
ACC.L[374] = 'Canceling...';
ACC.L[375] = 'Open';
ACC.L[376] = 'New chat in queue';
ACC.L[377] = '%p% start new chat in the «%q%»';
ACC.L[378] = 'New chat with visitor';
ACC.L[379] = 'Visitor %p% in chat with you.';
ACC.L[380] = 'New chat with agent';
ACC.L[381] = '%p% in chat with you..';
ACC.L[382] = 'Applications';
ACC.L[383] = 'Queue without name';
ACC.L[384] = 'Remember Me';
ACC.L[385] = 'Automatic Sign-In';
ACC.L[386] = 'Start up automatically after a logon';
ACC.L[387] = 'To activate the Automatic Sign-In please manually sign into the Contact Center right now.';
ACC.L[388] = 'Invalid authorization key';
ACC.L[389] = 'Are you sure you want to cancel the Automatic Sign-In?';
ACC.L[390] = 'Automatic Sign-In as';
ACC.L[391] = 'Automatic Sign-In is enabled.<br><br>The next time you open the Contact Center should happen automatically sign in under this account.<br><br>To turn off automatic sign-in, leave the Contact Center and uncheck the option.<br><br>If the automatic sign-in is not carried out more than 60 days, the option is canceled.';
ACC.L[392] = 'Spell check';
ACC.L[393] = 'Disable spell check';
ACC.L[394] = 'All languages';
ACC.L[395] = 'The selected language(s) does not support spell checking';
ACC.L[396] = 'New Version Available';
ACC.L[397] = 'Update';
ACC.L[398] = 'Download';
ACC.L[399] = 'System Requirements';
ACC.L[400] = 'or newer';
ACC.L[401] = 'of free space';
ACC.L[402] = 'Download';
ACC.L[403] = 'What\'s New?';
ACC.L[404] = 'Attention!';
ACC.L[405] = 'The running application will be automatically closed and will be opened after update.<br><br>Proceed to download and update?';
ACC.L[406] = 'Start';
ACC.L[407] = 'The download process and further update has started.<br><br>Please wait ... <span id="cc_nadpm"></span>';
ACC.L[408] = 'No users';
ACC.L[409] = 'Downloading %p%%';
ACC.L[410] = 'The download process is interrupted, the application is not completely loaded.<br><br>Please try again.';
ACC.L[411] = 'message';
ACC.L[412] = 'messages';
ACC.L[413] = 'messages';
ACC.L[414] = 'Open New Ticket';
ACC.L[415] = 'Account Settings';
ACC.L[416] = 'Change password';
ACC.L[417] = 'Current password';
ACC.L[418] = 'New password';
ACC.L[419] = 'Confirm new password';
ACC.L[420] = 'Enter current password';
ACC.L[421] = 'New passwords do not match';
ACC.L[422] = 'Enter new password';
ACC.L[423] = 'Confirm new password';
ACC.L[424] = 'The new password must have 6 or more characters';
ACC.L[425] = 'Password changed successfully';
ACC.L[426] = 'Current password is incorrect';
ACC.L[427] = 'New Notification';
ACC.L[428] = 'Send Notification';
ACC.L[429] = ['Recipient', 'Subject', 'Message', 'Validity period'];
ACC.L[430] = ['All', '&ndash; Department &ndash;&nbsp;&nbsp;&nbsp;', '&ndash; Employee &ndash;&nbsp;&nbsp;&nbsp;'];
ACC.L[431] = ['1 week', '2 weeks', '1 month', '3 months'];
ACC.L[432] = 'Notification was successfully sent';
ACC.L[433] = 'Notice from the user';
// 434 moved to 47
ACC.L[435] = 'Add tags';
ACC.L[436] = 'Help center';
ACC.L[437] = ['Quick Start!', 'Check up a condition of readiness to serve the website visitors.'];
ACC.L[438] = ['Widget installation', 'Step-by-step instructions on how to install the widget code on your website.'];
ACC.L[439] = ['Frequently asked questions (FAQ)', 'Frequently asked Questions. Perhaps, there is a ready-made solution for your task.'];
ACC.L[440] = ['Administrator guide', 'Setting up the service system. Design and behavior of the widget, distribution of calls, user management and everything else that can be configured.'];
ACC.L[441] = ['Manager guide', 'Statistics and reports on the filled out forms, chats, calls. Report on the activity and performance of agents.'];
ACC.L[442] = ['Operator guide', 'How to get a chat from the queue, transfer and conference chat, quick phrases, tags, comments and other operator options.'];
ACC.L[443] = ['Technical support', 'If the solution was not found, contact us, technical specialists will be happy to help!'];
ACC.L[444] = 'New queue';
ACC.L[445] = 'Export to XLSX';
ACC.L[446] = 'XLSX Format';
ACC.L[447] = 'Visitor\'s card';
ACC.L[448] = 'Visit';
ACC.L[449] = 'Conversation missed';
ACC.L[450] = 'Conversation without answer';
ACC.L[451] = 'Conversation';
ACC.L[452] = 'Chat on the website';
ACC.L[453] = 'Can\'t get through, one of subscribers cannot be reached';
ACC.L[454] = 'Agent\'s number';
ACC.L[455] = 'Agent';
ACC.L[456] = 'Visitor call from the browser';
ACC.L[457] = 'Visitor\'s number';
ACC.L[458] = 'Call recording';
ACC.L[459] = 'Call from the website';
ACC.L[460] = 'Call time';
ACC.L[461] = 'Call request from the website';
ACC.L[462] = '';
ACC.L[463] = 'Completed form on the website';
ACC.L[464] = 'No information';
ACC.L[465] = 'History';
ACC.L[466] = 'by Company';
ACC.L[467] = 'The visitor closed the message';
ACC.L[468] = 'Contact';
ACC.L[469] = ['Name', 'Full name'];
ACC.L[470] = 'Company';
ACC.L[471] = ['Name', 'Company name'];
ACC.L[472] = ['visitor','visitors','visitors'];
ACC.L[473] = 'Linked with';
ACC.L[474] = 'Add new field';
ACC.L[475] = 'Found an existing contact';
ACC.L[476] = 'Link with the visitor';
ACC.L[477] = 'Linked with';
ACC.L[478] = ['contact','contacts','contacts'];
ACC.L[479] = 'Found an existing company';
ACC.L[480] = 'Link with the contact';
ACC.L[481] = 'No existing contact.<br>First, save the new contact, then you can link the company to it.';
ACC.L[482] = 'by Visitor';
ACC.L[483] = 'by Contact';
ACC.L[484] = 'Comment on chat';
ACC.L[485] = 'Your comment on this chat ...';
ACC.L[486] = 'Comment';
ACC.L[487] = 'Please add your comment to the chat.';
ACC.L[488] = 'Please add one or more tags to the chat.';
ACC.L[489] = 'Transfer the conversation due to<br>lack of message delivery confirmation to the agent.';
ACC.L[490] = '%p% start new direct chat with you.';
ACC.L[491] = 'The hold message';
ACC.L[492] = 'Send the hold message';
ACC.L[493] = ['5 minute break', '10 minute break', '15 minute break', 'minute break'];
ACC.L[494] = ['WEB-Online', 'Automatically turn on in %min%.'];
ACC.L[495] = 'minute';
ACC.L[496] = 'minutes';
ACC.L[497] = 'minutes';
ACC.L[498] = 'Compose mail';
ACC.L[499] = 'Do you want to upload the image?';
ACC.L[500] = 'Extra Information';
ACC.L[501] = 'Please wait, configuration analysis is in progress ...';
ACC.L[502] = 'No paid license';
ACC.L[503] = ['No virtual queue has been assigned to the website.', 'Open the settings, select a website, the list of available virtual queues will appear on the right in the configuration section. Assign the desired queue or several queues.'];
ACC.L[504] = 'Open Settings';
ACC.L[505] = ['There are no agents in the virtual queue «%queue%»', 'Open the settings, select the virtual queue, below the left, in the configuration section, a form will appear where the list of agents for chat services can be defined. Add agents to the queue, and prioritize, if necessary.'];
ACC.L[506] = ['There are no agents with the status WEB-ONLINE for the virtual queue «%queue%»', 'The WEB-ONLINE mode can be activated at the top right of the toolbar. Green means the mode has been successfully turned on. To view the list of agents participating in the maintenance chats, open the settings, select the appropriate virtual queue.'];
ACC.L[507] = 'Active';
ACC.L[508] = 'The minimum settings of the service were checked successfully, the configuration is correct.';
ACC.L[509] = ['No websites.', 'Open the settings, in the section about websites, add a new website. Select the added website in the list, assign a virtual queue in the right side of the site settings section.'];
ACC.L[510] = ['There are no phone numbers in the virtual queue «%queue%» for dial.', 'For receiving calls from the website, the agents numbers or call center number must be configured in the virtual queue. Open the settings, select a virtual queue, below on the right, a form appears in the configuration section where you can specify agents or call center numbers, as well as other dial rules.'];
ACC.L[511] = ['The Leads Generator settings were not found.', 'To configure the leads generator, open the settings, select a website, add a page, configure and save. Remember, the leads generator will activate on the website page at the time when the agents are offline.'];
ACC.L[512] = ['Developer guide', 'Javascript widget API guide. Use the Javascript programming language to influence the widget.'];
ACC.L[513] = 'Chat in %c%';
ACC.L[514] = ['Link', 'Download'];
ACC.L[515] = 'Open the location';
ACC.L[516] = 'Analytics';
ACC.L[517] = 'Category';
ACC.L[518] = 'Uncategorized';
ACC.L[519] = 'Do you want to send an image to the chat?';
ACC.L[520] = 'Do you want to send the file to the chat?';
ACC.L[521] = 'Continue';
ACC.L[522] = 'Your comment on this call ...';
ACC.L[523] = 'Add ';
ACC.L[524] = ['a comment', 'tags'];
ACC.L[525] = 'Attention! You are signed in to the customer account.<br>Customer: %con%<br>Identificator: %cbi%';
ACC.L[526] = 'Bind my system account to the customer\'s cabinet.';
ACC.L[527] = 'Bind';
ACC.L[528] = 'Bind was successful';
ACC.L[529] = 'Sign in Contact Center by user name <b>%acc%</b>';
ACC.L[530] = 'Live Chat';
ACC.L[531] = ['Contact Center Customer Support', 'New chat', 'Subject', 'Message', 'Message subject', 'Enter message ...', 'Start chat', 'Your chat in the queue, the consultant will answer you shortly ...'];
ACC.L[532] = 'All operators are offline.<br><br>The message is directed to the queue. The first available operator will answer you.';
ACC.L[533] = 'member';
ACC.L[534] = 'members';
ACC.L[535] = 'members';
ACC.L[536] = 'Start a New Chat';
ACC.L[537] = ['All channels', 'Did not answer', 'In queues', 'Out of five stars', 'Voting', 'First message', 'Picking up from queue'];
ACC.L[538] = ['Thumb up', 'Thumb down'];
ACC.L[539] = 'Push notifications';
ACC.L[540] = ['Unsubscribe', 'Test', 'Subscribe on this device', 'Are you sure you do not want to receive notifications on the %dev% device?'];
ACC.L[541] = ['Subscribers', 'Notifications'];
ACC.L[542] = ['Chat in the queue', 'New chat', 'New message', 'Invitation to the conference'];
ACC.L[543] = 'Device successfully subscribed to push notifications';
ACC.L[544] = 'No devices allowing notifications';
ACC.L[545] = 'The device was successfully unsubscribed from push notifications.';
ACC.L[546] = 'Push notification was successfully sent.';
ACC.L[547] = 'Receive notifications';
ACC.L[548] = 'Attention! Some devices do not show notifications by default. The option is turns on in system settings for notifications or applications.';
ACC.L[549] = 'Log in to access the Contact Center';
ACC.L[550] = 'Employees';
ACC.L[551] = 'My chats';
ACC.L[552] = 'Queues';
ACC.L[553] = 'Settings';
ACC.L[554] = 'Online';
ACC.L[555] = 'Offline';
ACC.L[556] = 'Connecting ...';
