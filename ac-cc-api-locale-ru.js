var ACC = {};
// Lang proc
ACC.glp = function(n) {
    var d = n;
    if (d < 0) d = -d;

    if (d > 15) { d = parseInt(d.toString().slice(-2)); };
    if (d >= 15) { d = parseInt(d.toString().slice(-1)); };
    
    switch(d) {
	case 0: return 2; break;
	case 1: return 0; break;
	case 2: return 1; break;
	case 3: return 1; break;
	case 4: return 1; break;
	case 5: return 2; break;
	case 6: return 2; break;
	case 7: return 2; break;
	case 8: return 2; break;
	case 9: return 2; break;
	case 10: return 2; break;
	case 11: return 2; break;
	case 12: return 2; break;
	case 13: return 2; break;
	case 14: return 2; break;
	case 15: return 2; break;
    }
    return 0;
};

ACC.CUR = {};
ACC.CUR['RUB'] = 'руб';
ACC.CUR['USD'] = 'USD';
ACC.CUR['EUR'] = 'евро';
ACC.CUR['KZT'] = 'тг';

ACC.PLATFORM = {};
ACC.PLATFORM['LINUX'] = ['Версия для Linux', 'fa fa-linux'];
ACC.PLATFORM['WIN'] = ['Версия для Windows', 'fa fa-windows'];

ACC.CONTACT_TYPES = [];
ACC.CONTACT_TYPES[0] = {'type': 'tel', 'name':'business_phone', 'fn':'Телефон раб.', 'ph':'Рабочий телефон'};
ACC.CONTACT_TYPES[1] = {'type': 'tel', 'name':'mobile_phone', 'fn':'Телефон моб.', 'ph':'Мобильный телефон'};
ACC.CONTACT_TYPES[2] = {'type': 'tel', 'name':'personal_phone', 'fn':'Телефон личн.', 'ph':'Личный телефон'};
ACC.CONTACT_TYPES[3] = {'type': 'tel', 'name':'fax_phone', 'fn':'Факс', 'ph':''};
ACC.CONTACT_TYPES[4] = {'type': 'tel', 'name':'home_phone', 'fn':'Телефон дом.', 'ph':'Домашний телефон'};
ACC.CONTACT_TYPES[5] = {'type': 'tel', 'name':'phone', 'fn':'Телефон', 'ph':'Номер телефона', "com":1};
ACC.CONTACT_TYPES[6] = {'type': 'email', 'name':'business_email', 'fn':'Email раб.', 'ph':'Рабочий Email'};
ACC.CONTACT_TYPES[7] = {'type': 'email', 'name':'personal_email', 'fn':'Email личн.', 'ph':'Личный Email'};
ACC.CONTACT_TYPES[8] = {'type': 'email', 'name':'email', 'fn':'Email', 'ph':'Адрес эл. почты', "com":1};
ACC.CONTACT_TYPES[9] = {'type': 'position', 'name':'position', 'fn':'Должность', 'ph':''};
ACC.CONTACT_TYPES[10] = {'type': 'im', 'name':'skype', 'fn':'Skype', 'ph':'', "com":1};
ACC.CONTACT_TYPES[11] = {'type': 'im', 'name':'msn', 'fn':'MSN', 'ph':''};
ACC.CONTACT_TYPES[12] = {'type': 'web', 'name':'web_address', 'fn':'WEB', 'ph':'Адрес веб-сайта', "com":1};
ACC.CONTACT_TYPES[13] = {'type': 'address', 'name':'business_address', 'fn':'Адрес', 'ph':'', "com":1};
ACC.CONTACT_TYPES[14] = {'type': 'social', 'name':'facebook', 'fn':'Facebook', 'ph':'Facebook страница', "com":1};
ACC.CONTACT_TYPES[15] = {'type': 'social', 'name':'vk', 'fn':'ВКонтакте', 'ph':'VK страница'};
ACC.CONTACT_TYPES[16] = {'type': 'other', 'name':'other', 'fn':'Другое', 'ph':'', "com":1};

ACC.CTD = {};
ACC.CTD['tel'] = 'Телефон';
ACC.CTD['email'] = 'Email';
ACC.CTD['position'] = 'Должность';
ACC.CTD['im'] = 'Мессенджер';
ACC.CTD['web'] = 'Веб-сайт';
ACC.CTD['address'] = 'Адрес';
ACC.CTD['social'] = 'Соц-сеть';
ACC.CTD['other'] = 'Другое';

ACC.MSG = {};
ACC.MSG['error'] = {};
ACC.MSG['error']['unk_params'] = 'Неизвестный или плохой параметр.';
ACC.MSG['error']['not_found'] = 'Информация не найдена.';
ACC.MSG['error']['deny'] = 'Отказано в доступе к контенту.';
ACC.MSG['error']['no_theme'] = 'Нет выбранной конфигурации темы для сохранения.';
ACC.MSG['error']['oops'] = 'Упс!... Произошла внутренняя ошибка.<br>Уведомление отправлено в службу поддержки.<br>Попробуйте повторить действие через некоторое время.<br>Приносим свои извинения за временные неудобства.';
ACC.MSG['error']['balance_not_enough'] = 'На вашем счете недостаточно средств для оплаты.';
ACC.MSG['error']['order_due'] = 'Допустимый срок оплаты счета прошел.';
ACC.MSG['error']['need_manager_opt'] = 'Отказано в доступе к отчетам.<br>Требуются привилегии менеджера.<br>Задаётся опцией в пункте «Пользователи и группы»';
ACC.MSG['error']['for_priv_user_only'] = 'Требуются привилегии менеджера или администратора.';

ACC.MSG['info'] = {};
ACC.MSG['info']['conf_am'] = '%person% уже среди участников конференции.';
ACC.MSG['info']['conf_closed'] = 'Конференция уже завершилась.';
ACC.MSG['info']['conf_refused'] = '%person% отказывается от участия в конференции.';
ACC.MSG['info']['dlg_closed'] = 'Диалог был завершён.';
ACC.MSG['info']['visitor_queued'] = 'Посетитель ожидает в очереди. Проверьте очередь «%queue%»';
ACC.MSG['info']['question_asked'] = 'Ваш вопрос передан администратору сайта.<br>Решение о добавлении вопроса/ответа в общий список может занять некоторое время.<br><br>Спасибо за Ваше внимание!';
ACC.MSG['info']['NOT_USED_license_expired'] = 'Срок действия лицензии истёк!<br>Чтобы сохранить услугу доступной, пожалуйста, <a href="#my_service_package">продлите</a> текущий пакет или <a href="#online_store">купите</a> новый.';
ACC.MSG['info']['upgrade_package'] = 'Действующих лицензий недостаточно для включения режима WEB-Онлайн.<br>Посмотреть состояние услуг можно в панели управления.';
ACC.MSG['info']['no_active_package'] = 'Включение режима WEB-Онлайн отклонено - нет действующего тарифного плана.<br>Посмотреть состояние услуг можно в панели управления.';
ACC.MSG['info']['upgrade_options'] = 'Действующих лицензий на опции недостаточно.<br>Посмотреть состояние услуг можно в панели управления.';
ACC.MSG['info']['webonline_turned_off'] = 'Для отправления сообщения посетителю требуется включить режим ВЕБ-ОНЛАЙН.';
ACC.MSG['info']['size_limit'] = 'Превышена допустимая длинна запроса. Попробуйте использовать более короткий запрос.';
ACC.MSG['info']['visitor_in_chat'] = 'Посетителю уже предложен чат.';
ACC.MSG['info']['webonline_not_stop1'] = 'У вас есть открытый чат с посетителем.<br>Для выключения режима ВЕБ-ОНЛАЙН следует завершить все чаты с посетителями.';
ACC.MSG['info']['webonline_not_stopN'] = 'У вас есть открытые чаты с посетителями.<br>Для выключения режима ВЕБ-ОНЛАЙН следует завершить все чаты с посетителями.';
ACC.MSG['info']['phrase_already_exists'] = 'Заданная фраза уже добавлена.';
ACC.MSG['info']['visitor_left_site_1'] = 'Посетитель ушел с сайта, сообщение не может быть доставлено.';
ACC.MSG['info']['admin_profile_not_complete'] = 'Профиль пользователя не заполнен. В первую очередь следует заполнить профиль.';
ACC.MSG['info']['room_autotransfer'] = 'Виджет автоматически перевел этот диалог в виртуальную очередь, так как подтверждения доставки сообщения посетитель не получил в течении %val1% секунд(ы).';

// Admin Exit Cause
ACC.MSG['EC1000'] = 'Нормальный выход';
ACC.MSG['EC1010'] = 'Повторный вход';
ACC.MSG['EC1020'] = 'Упс, система';
ACC.MSG['EC1030'] = 'Акаунт удален';
ACC.MSG['EC1040'] = 'Акаунт заблокирован';

ACC.MSG['edit_box'] = {};
ACC.MSG['edit_box']['ch_vnote'] = 'Короткое примечание';
ACC.MSG['edit_box']['saving'] = 'Сохранение';
ACC.MSG['edit_box']['addition'] = 'Добавление';
ACC.MSG['edit_box']['ld_new_page'] = 'Добавление URL страницы';
ACC.MSG['edit_box']['ld_upd_page'] = 'Изменение URL страницы';

ACC.MSG['start_tag'] = {};
ACC.MSG['start_tag']['___ac_link___'] = 'Ярлык';
ACC.MSG['start_tag']['___hello___'] = 'Приветствие';
ACC.MSG['start_tag']['___im_chat___'] = 'Сообщение';
ACC.MSG['start_tag']['___im_lam___'] = 'Сообщение';
ACC.MSG['start_tag']['___reopen___'] = 'Открыт заново';
ACC.MSG['start_tag']['___direct_chat___'] = 'Прямой чат';
ACC.MSG['start_tag']['___direct_chat_link___'] = 'Прямой чат (ярлык)';
ACC.MSG['start_tag']['___start_lam___'] = 'Оставить сообщение';
ACC.MSG['start_tag']['___cv_chat___'] = 'Пойман на выходе';
ACC.MSG['start_tag']['___cv_lam___'] = 'Пойман на выходе';
///???ACC.MSG['start_tag']['___open_jmitty___'] = 'Переход по сайту';

ACC.MSG['mc'] = {};
ACC.MSG['mc']['domain_uni_self'] = 'Этот сайт уже добавлен.';
ACC.MSG['mc']['domain_uni_other'] = 'Этот сайт уже зарегистрирован в системе другим пользователем.<br>Если владельцем являетесь Вы - следует обратиться к <a href="#" class="dl"><span>инструкции</span></a>.';
ACC.MSG['mc']['domainzone_uni'] = 'Этот сайт уже назначен зоне.';

ACC.MSG['hd_statuses'] = {};
ACC.MSG['hd_statuses']['jhd-def-status-new'] = 'Новый';
ACC.MSG['hd_statuses']['jhd-def-status-open'] = 'Открыт';
ACC.MSG['hd_statuses']['jhd-def-status-in-progress'] = 'В работе';
ACC.MSG['hd_statuses']['jhd-def-status-reopened'] = 'Открыт заново';
ACC.MSG['hd_statuses']['jhd-def-status-resolved'] = 'Решен';
ACC.MSG['hd_statuses']['jhd-def-status-closed'] = 'Закрыт';

ACC.MSG['hd_priorities'] = {};
ACC.MSG['hd_priorities']['jhd-def-priority-low'] = 'Низкий';
ACC.MSG['hd_priorities']['jhd-def-priority-normal'] = 'Обычный';
ACC.MSG['hd_priorities']['jhd-def-priority-high'] = 'Высокий';
ACC.MSG['hd_priorities']['jhd-def-priority-critical'] = 'Критический';

ACC.MSG['hd_types'] = {};
ACC.MSG['hd_types']['jhd-def-type-feature-request'] = 'Новая функция';
ACC.MSG['hd_types']['jhd-def-type-bug'] = 'Ошибка';
ACC.MSG['hd_types']['jhd-def-type-other'] = 'Не определен';

ACC.L = [];
ACC.L[0] = 'Контакт-центр';
ACC.L[1] = 'Имя пользователя / Email';
ACC.L[2] = 'Пароль';
ACC.L[3] = 'Войти';
ACC.L[4] = '<a class="link-s1" href="#">Забыли пароль?</a>';
ACC.L[5] = 'Посетители';
ACC.L[6] = 'Этот пользователь уже вошел в Контакт-центр.<br>Если Вы продолжите, то сессия ранее вошедшего будет закрыта.<br><br>Продолжить?';
ACC.L[7] = 'Гость';
ACC.L[8] = 'Посетитель';
ACC.L[9] = 'Время на сайте';
ACC.L[10] = 'Путь';
ACC.L[11] = 'Задачи';
ACC.L[12] = '<a class="link-s1" href="#">Регистрация</a> или <a class="link-s1" href="#">Читать</a>';
ACC.L[13] = 'Error: WebSocket не поддерживается этим браузером.<br>Пожалуйста обновите ваш браузер или скачайте более совершенный.';
ACC.L[14] = 'язык';
ACC.L[15] = 'Нет';
ACC.L[16] = 'Учётные записи';
ACC.L[17] = 'Пусто';
ACC.L[18] = 'Не определена';
ACC.L[19] = 'Не определён';
ACC.L[20] = 'Не определено';

ACC.L[21] = 'Посетитель';
ACC.L[22] = 'Расположение';
ACC.L[23] = 'Онлайн';
ACC.L[24] = 'Посещения';
ACC.L[25] = 'Просмотры';
ACC.L[26] = 'Чаты';
ACC.L[27] = 'Сайт и страница';
ACC.L[28] = 'Переход';
ACC.L[266] = 'Звонки';

ACC.L[29] = ''; // ------- not used
ACC.L[30] = '';
ACC.L[31] = '';
ACC.L[32] = '';
ACC.L[33] = '';
ACC.L[34] = '';
ACC.L[35] = '';
ACC.L[36] = '';

// Используется для обозначения даты как описания: 1 Мая, 20 Апреля, родительный падеж
ACC.L[37] = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
// Именительный падеж
ACC.L[79] = new Array('Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь');
//ACC.L[38] = new Array('янв', 'февр', 'марта', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.');
ACC.L[38] = new Array('янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'нояб', 'дек');
ACC.L[260] = 'Сегодня';
ACC.L[261] = 'Вчера';
ACC.L[262] = 'в';

ACC.L[39] = 'Доставлено';
ACC.L[40] = 'Прочитано';
ACC.L[41] = 'пишет';

ACC.L[42] = 'Продолжение';

ACC.L[43] = 'Сообщение';
ACC.L[44] = 'Сообщения';
ACC.L[45] = 'Сообщений';

ACC.L[46] = 'Закрыть диалог';
ACC.L[47] = 'Перевести диалог';
ACC.L[100] = 'Перевод диалога';
ACC.L[434] = 'Теги';
ACC.L[48] = 'Пригласить в конференцию';

ACC.L[49] = 'офлайн';
ACC.L[50] = 'Вас приглашает в конференцию %person%.<br><br>Примите участие?';

ACC.L[51] = 'Принять';
ACC.L[52] = 'Отказаться';

ACC.L[53] = 'Успешно';
ACC.L[54] = 'Ошибка';
ACC.L[55] = 'Доступ запрещён';
ACC.L[56] = 'Предупреждение';
ACC.L[57] = 'Информация';
ACC.L[58] = 'Вопрос';

ACC.L[110] = 'Подтверждение';

ACC.L[59] = 'ОК';
ACC.L[60] = 'Закрыть';
ACC.L[61] = 'Да';
ACC.L[62] = 'Нет';

ACC.L[124] = 'Отмена';
ACC.L[125] = 'Сохранить';
ACC.L[194] = 'Отправить';

ACC.L[63] = 'Подробности';

ACC.L[64] = '%person% в конференции';
ACC.L[65] = '%person% покидает конференцию';

ACC.L[66] = 'Участники конференции';
ACC.L[67] = 'Приглашение в конференцию';
ACC.L[68] = 'Конференция';

ACC.L[69] = 'Чаты';

ACC.L[70] = 'Выберите временной интервал';
ACC.L[71] = 'Месяц';
ACC.L[72] = 'Этот';
ACC.L[73] = 'Искать историю за текущий месяц';
ACC.L[74] = 'Прошлый';
ACC.L[75] = 'Искать историю за прошлый месяц';
ACC.L[76] = 'Период';
ACC.L[77] = 'С';
ACC.L[78] = 'по';
// 79 - months
ACC.L[80] = 'Поиск';

ACC.L[81] = 'Чаты не найдены';
ACC.L[82] = 'Посещения не найдены';

ACC.L[83] = 'Визиты';
ACC.L[84] = 'Выберите временной интервал';

ACC.L[85] = 'Операционная система';
ACC.L[86] = 'Браузер';

ACC.L[87] = 'Изменить комментарий';

ACC.L[88] = 'Быстрый доступ';
ACC.L[89] = 'Все сообщения';
ACC.L[116] = 'Офлайн сообщения';

ACC.L[90] = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
ACC.L[91] = new Array('Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб');

ACC.L[92] = 'Новое';
ACC.L[93] = 'Информация';
ACC.L[94] = 'Закрыть сообщение';
ACC.L[95] = 'Просмотрено,';
ACC.L[96] = 'Закрыт,';

ACC.L[97] = 'Новые обращения';
ACC.L[98] = 'Внутренее сообщение';

ACC.L[99] = '%person% на связи';

//ACC.L[100] = ''; // See 47

ACC.L[101] = 'Перевод диалога в очередь';

ACC.L[102] = 'Конференция завершена';
ACC.L[103] = 'Диалог завершён';

ACC.L[104] = 'Фразы';
ACC.L[105] = 'Вопросы';
ACC.L[106] = 'Основные';
ACC.L[107] = 'Персональные';
ACC.L[108] = 'Удалить';
ACC.L[109] = 'Добавить';
// 110 -> 58
ACC.L[111] = 'Удалить фразу?';
ACC.L[112] = 'Часто задаваемые вопросы';
ACC.L[113] = 'Задать вопрос';
ACC.L[114] = 'Отправить';
ACC.L[115] = 'Напишите Ваш вопрос';
// 116 -> 89
ACC.L[117] = 'Книга предложений';
ACC.L[118] = 'Адрес эл. почты';
ACC.L[119] = 'Номер';
ACC.L[120] = 'Добавить комментарий';
ACC.L[121] = 'Убрать форму';
ACC.L[122] = 'Введите текст комментария';
ACC.L[123] = 'Разместить комментарий';
// 124 - 125 -> 62
ACC.L[126] = 'Задать короткое примечание';
ACC.L[127] = 'IP адрес';

ACC.L[128] = 'диалог';
ACC.L[129] = 'диалога';
ACC.L[130] = 'диалогов';

ACC.L[131] = 'Найден ';
ACC.L[132] = 'Найдено ';
ACC.L[133] = 'Найдено ';

ACC.L[134] = 'Найдено ';	// Найдено Х посещение (я, й)
ACC.L[135] = 'Найдено ';
ACC.L[136] = 'Найдено ';

ACC.L[137] = 'посещение';
ACC.L[138] = 'посещения';
ACC.L[139] = 'посещений';

ACC.L[140] = 'просмотр';
ACC.L[141] = 'просмотра';
ACC.L[142] = 'просмотров';

ACC.L[143] = 'Прямой переход';
ACC.L[144] = 'Чат не начат';
ACC.L[145] = 'Страница открытия чата';
ACC.L[146] = 'Метка открытия чата';
ACC.L[147] = 'Источник';
ACC.L[148] = 'Кампания, ключевое слово';
ACC.L[149] = 'UTM: Источник';
ACC.L[150] = 'UTM: Среда';
ACC.L[151] = 'UTM: Кампания';
ACC.L[152] = 'UTM: Термин';
ACC.L[153] = 'UTM: Содержание';
ACC.L[154] = 'Переход с сайта';

ACC.L[155] = 'Навигация посетителя по сайту';
ACC.L[156] = 'Открытие диалога';

ACC.L[211] = 'секунда';
ACC.L[212] = 'секунды';
ACC.L[213] = 'секунд';

ACC.L[157] = 'минута';
ACC.L[158] = 'минуты';
ACC.L[159] = 'минут';
ACC.L[160] = 'час';
ACC.L[161] = 'часа';
ACC.L[162] = 'часов';
ACC.L[163] = 'день';
ACC.L[164] = 'дня';
ACC.L[165] = 'дней';

ACC.L[166] = 'Сейчас на сайте';
ACC.L[167] = 'Открытие страницы';
ACC.L[168] = 'Просмотр страницы';

ACC.L[169] = 'Формы';
ACC.L[170] = 'Формы и собранная информация';
ACC.L[171] = 'Предложить посетителю заполнить форму';
ACC.L[172] = 'Предложить посетителю перезаполнить форму';
ACC.L[173] = 'Форма к заполнению';
ACC.L[174] = 'Форма заполнена';

ACC.L[175] = '%person% закрыл(а) диалог';

ACC.L[176] = 'Доступ к услугам ограничен по причине отсутствия действующей лицензии.';
ACC.L[177] = 'Управлять услугами и лицензиями могут пользователи с правами менеджера или администратора.';
ACC.L[178] = 'Открыть <a class="dl" href="#">панель управления услугами</a>';

ACC.L[179] = 'Центр услуг';
ACC.L[180] = 'Заявки на звонок';
ACC.L[181] = 'Настройки';
// Group label
ACC.L[182] = 'Анализ эффективности';
ACC.L[183] = 'Статистика';
// Group label
ACC.L[184] = 'Техническая поддержка';
ACC.L[185] = 'Заявки';
ACC.L[186] = 'Создать заявку';
ACC.L[187] = 'Рабочая деятельность';
ACC.L[188] = 'Идеи и предложения';
ACC.L[189] = 'Интернет-магазин';
ACC.L[190] = 'Панель управления';
ACC.L[191] = 'WEB-ОНЛАЙН';
ACC.L[192] = 'Нет данных';
ACC.L[193] = 'Режим WEB-ОНЛАЙН не включен';
// 194 -> 62
ACC.L[195] = 'Отправить счет на адрес электронной почты';
ACC.L[196] = 'Емейл адрес';
ACC.L[197] = 'Емейл адрес не указан';
ACC.L[198] = 'Емейл адрес указан с ошибкой';
ACC.L[199] = 'Сегодня';
ACC.L[200] = 'Завтра';
ACC.L[201] = 'С ';
ACC.L[202] = ' до ';
ACC.L[203] = 'Часовой пояс';
ACC.L[204] = 'Локальное время';
ACC.L[205] = 'Время создания';
ACC.L[206] = 'Информация о посетителе';
ACC.L[207] = 'Заявка';
ACC.L[208] = '%person% открыл(а) диалог';
ACC.L[209] = 'Отчеты';
ACC.L[210] = ['Плохо', 'Средне', 'Хорошо', 'Очень хорошо', 'Отлично'];
// 211,212,213 go to 157
ACC.L[214] = 'из';
ACC.L[215] = 'ч.';
ACC.L[216] = '';
ACC.L[217] = 'сек';
ACC.L[218] = 'мин';
ACC.L[219] = 'Руководство пользователя';
ACC.L[220] = 'Пожалуйста подождите ';
ACC.L[221] = 'Ваш запрос обрабатывается...';
ACC.L[222] = 'Всего';
ACC.L[223] = 'Все сайты';
ACC.L[224] = 'Все';
ACC.L[225] = 'Информация о посетителе';
ACC.L[226] = 'Загрузка...';
ACC.L[227] = 'Сегодня';
ACC.L[228] = 'Вчера';
ACC.L[229] = 'Последние 7 дней';
ACC.L[230] = 'Последние 30 дней';
ACC.L[231] = 'Этот месяц';
ACC.L[232] = 'Последний месяц';
ACC.L[233] = 'Дата / Время';
ACC.L[234] = 'Посетитель';
ACC.L[235] = 'Страница';

ACC.L[236] = 'Информация';
ACC.L[237] = 'Счетчики';
ACC.L[238] = 'Источник';
ACC.L[239] = 'Блокировать';
ACC.L[240] = 'Блокировать на один день';
ACC.L[241] = 'Блокировать на одну неделю';
ACC.L[242] = 'Заметка...';
// OS
ACC.L[243] = 'Не определена';
// Browser
ACC.L[244] = 'Не определен';
ACC.L[245] = 'Покинул сайт';
// Visits, Views, Chats, Calls
ACC.L[246] = 'визит';
ACC.L[247] = 'визита';
ACC.L[248] = 'визитов';
ACC.L[249] = 'просмотр';
ACC.L[250] = 'просмотра';
ACC.L[251] = 'просмотров';
ACC.L[252] = 'чат';
ACC.L[253] = 'чата';
ACC.L[254] = 'чатов';
ACC.L[255] = 'звонок';
ACC.L[256] = 'звонка';
ACC.L[257] = 'звонков';
ACC.L[258] = ' и ';
ACC.L[259] = 'на сайте';

ACC.L[263] = 'Последний визит';
ACC.L[264] = 'Посещал';
ACC.L[265] = 'Время посещения';
ACC.L[267] = 'UTM Source';
ACC.L[268] = 'UTM Campaign';
ACC.L[269] = 'UTM Medium';
ACC.L[270] = 'UTM Content';
ACC.L[271] = 'UTM Term';
ACC.L[272] = 'Источник перехода';
ACC.L[273] = 'Без заголовка';
ACC.L[274] = 'покинул сайт';
ACC.L[275] = 'Разблокируется';
ACC.L[276] = 'Разблокировать сейчас';

ACC.L[277] = 'Предыдущий чат';
ACC.L[278] = 'Текущий чат';
ACC.L[279] = 'Отправить';
ACC.L[280] = 'Введите сообщение и нажмите Enter';
ACC.L[281] = 'История посещений';
ACC.L[282] = 'История чата';
ACC.L[283] = 'Продолжительность';
ACC.L[284] = 'Сообщения';
ACC.L[285] = 'Оценка';
ACC.L[286] = 'Форма не заполнена';
ACC.L[287] = 'Форма была успешно отправлена';
ACC.L[288] = 'Информация о пользователе';

ACC.L[289] = 'Принято чатов';
ACC.L[290] = 'Пропущено чатов';
ACC.L[291] = 'Чатов без ответа';
ACC.L[292] = 'Рейтинг';
ACC.L[293] = 'Голосование';
ACC.L[294] = 'Среднее время ответа';
ACC.L[295] = 'Средняя скорость реакции';
// Instead undefined or empty names
ACC.L[296] = '<span style="opacity:0.5;">...не задано...</span>';
ACC.L[297] = 'Имя';
ACC.L[298] = 'Комментарии';
ACC.L[299] = 'Сайт';
ACC.L[300] = 'Очередь';
ACC.L[301] = 'Предложение посетителя';
ACC.L[302] = 'Разместить';
ACC.L[303] = 'Опубликовать';
ACC.L[304] = 'Предложение';
ACC.L[305] = 'Новое';
ACC.L[306] = 'Не опубликовано';
ACC.L[307] = 'Опубликовано';
ACC.L[308] = 'Скрыто';
// next two reserved
ACC.L[309] = '';
ACC.L[310] = '';
ACC.L[311] = 'Скрыть';
ACC.L[312] = 'Время звонка';
ACC.L[313] = 'Осталось';
ACC.L[314] = 'Время звонить';
ACC.L[315] = 'Пришло время звонить посетителю.';
ACC.L[316] = 'Закрыть заявку';
ACC.L[317] = 'Меньше минуты';

ACC.L[318] = 'Выйти';
ACC.L[319] = 'Звуковое оповещение';
ACC.L[320] = 'Ваш браузер не поддерживает функции JSON.<br>Обновите текущий или скачайте более новый браузер.';
ACC.L[321] = 'Неверное имя пользователя или пароль';
ACC.L[322] = ['Учётная запись заблокирована', 'Сеанс прерван в целях безопастности.<br>Учётная запись была заблокирована администратором.'];
ACC.L[323] = ['Учётная запись закрыта', 'Сеанс прерван в целях безопастности.<br>Учётная запись была закрыта администратором.'];
ACC.L[324] = 'Учётная запись заблокирована';
ACC.L[325] = 'Забыли пароль?';
ACC.L[326] = 'Восстановление пароля';
ACC.L[327] = 'Введите адрес электронной почты, который был зарегистрирован';
ACC.L[328] = 'Отправить письмо';
ACC.L[329] = 'Адрес эл. почты';
ACC.L[330] = 'Вход в Контакт-центр';
ACC.L[331] = 'Неверный адрес электронной почты';
ACC.L[332] = 'Проверка...';
ACC.L[333] = 'Восстановление временно недоступно<br>Попробуйте повторить позже<br>Приносим извинения за временные неудобства';
ACC.L[334] = 'Адрес эл. почты не зарегистрирован';
ACC.L[335] = 'Письмо успешно отправлено';
ACC.L[336] = ['Сеанс завершен', 'Вы успешно вышли из своего аккаунта.'];
ACC.L[337] = ['Сеанс завершен', 'Пользователь выполнил вход с другого устройства.'];
ACC.L[338] = 'Прервана связь с сервисом.<br>Некоторые возможные причины: отсутствие Интернета, временные работы у провайдера услуги.<br><br>Рекомендуем попробовать войти снова.';
ACC.L[339] = 'Новости и события';
ACC.L[340] = 'Будьте в курсе наших новостей и событий';
ACC.L[341] = 'Показать еще';
ACC.L[342] = 'Больше новостей нет';
ACC.L[343] = 'Вы получили новое уведомление';
ACC.L[344] = 'Уведомления';
ACC.L[345] = 'Информация к сведению';
ACC.L[346] = 'Больше уведомлений нет';
ACC.L[347] = 'Новостей нет';
ACC.L[348] = 'Уведомлений нет';
ACC.L[349] = 'Открыть';
ACC.L[350] = 'Начать чат';
ACC.L[351] = 'Робот';
ACC.L[352] = 'Вложения';
ACC.L[353] = 'байт(а)';
ACC.L[354] = 'КБ';
ACC.L[355] = 'МБ';
ACC.L[356] = 'общий размер';
ACC.L[357] = 'Всего файлов';
ACC.L[358] = 'Вложенные файлы будут храниться в течении 30 дней';
ACC.L[359] = 'Загрузка прервана пользователем';
ACC.L[360] = 'Загружаемый размер слишком велик.<br>Попробуйте загрузить менее 20 МБ';
ACC.L[361] = 'Ошибка при загрузке. Загрузка прервана';
ACC.L[362] = 'Б';
ACC.L[363] = 'Загрузка вложений завершена';
ACC.L[364] = 'Загрузка вложений возможна после начала чата';
ACC.L[365] = 'Пожалуйста, подождите пока загрузка завершится';
ACC.L[366] = 'Отправитель';
ACC.L[367] = 'Загрузка';
ACC.L[368] = '%p%% Загружено';
ACC.L[369] = 'Размещение вложения в облаке, ожидайте...';
ACC.L[370] = 'Некоторые из прикрепляемых файлов имеют одинаковое имя (%n%)<br><br>Пожалуйста, загружайте их раздельно.';
ACC.L[371] = 'Слишком много файлов для одновременной загрузки.<br>Допустимо загружать до 10 файлов за один раз.';
ACC.L[372] = 'Загружаемая информация имеет нулевой размер. Загрузка остановлена.';
ACC.L[373] = 'Отмена';
ACC.L[374] = 'Отменяем...';
ACC.L[375] = 'Открыть';
ACC.L[376] = 'Новое обращение';
ACC.L[377] = 'Новое обращение от посетителя %p% в очередь «%q%»';
ACC.L[378] = 'Новый чат с посетителем';
ACC.L[379] = 'Посетитель %p% с Вами в чате.';
ACC.L[380] = 'Новый чат с агентом';
ACC.L[381] = '%p% с Вами в чате.';
ACC.L[382] = 'Приложения';
ACC.L[383] = 'Очередь без названия';
ACC.L[384] = 'Запомнить меня';
ACC.L[385] = 'Автоматический вход';
ACC.L[386] = 'Автоматически запускать приложение после входа в систему';
ACC.L[387] = 'Для активации автоматического входа в систему, пожалуйста, вручную войдите в Контакт-центр прямо сейчас.';
ACC.L[388] = 'Авторизационный ключ недействителен';
ACC.L[389] = 'Вы уверены что хотите отменить автоматический вход?';
ACC.L[390] = 'Автоматически входить как';
ACC.L[391] = 'Автоматический вход активирован.<br><br>При следующем открытии Контакт-центра должен произойти автоматический вход под этой учетной записью.<br><br>Для отключения автоматического входа выйдите из Контакт-центра и отмените опцию.<br><br>Если вход не осуществлялся более 60 дней, опция отменяется автоматически.';
ACC.L[392] = 'Проверка правописания';
ACC.L[393] = 'Отключить проверку';
ACC.L[394] = 'Для всех языков';
ACC.L[395] = 'Выбранный язык(и) не поддерживает проверку орфографии';
ACC.L[396] = 'Доступна новая версия';
ACC.L[397] = 'Обновить';
ACC.L[398] = 'Загрузить';
ACC.L[399] = 'Системные требования';
ACC.L[400] = 'и новее';
ACC.L[401] = 'свободного места';
ACC.L[402] = 'Загрузить';
ACC.L[403] = 'Что нового?';
ACC.L[404] = 'Внимание!';
ACC.L[405] = 'Работающее приложение будет автоматически закрыто и откроется после обновления.<br><br>Приступить к загрузке и обновлению?';
ACC.L[406] = 'Начать';
ACC.L[407] = 'Началась загрузка и последующее обновление приложения.<br><br>Пожалуйста, ожидайте ... <span id="cc_nadpm"></span>';
ACC.L[408] = 'Нет пользователей';
ACC.L[409] = 'Загрузка %p%%';
ACC.L[410] = 'Процесс загрузки был прерван, приложение загружено не полностью.<br><br>Попробуйте повторить ещё раз.';
ACC.L[411] = 'сообщение';
ACC.L[412] = 'сообщения';
ACC.L[413] = 'сообщений';
ACC.L[414] = 'Открыть новую заявку';
ACC.L[415] = 'Настройки аккаунта';
ACC.L[416] = 'Изменить пароль';
ACC.L[417] = 'Действующий пароль';
ACC.L[418] = 'Новый пароль';
ACC.L[419] = 'Подтвердите новый пароль';
ACC.L[420] = 'Введите текущий пароль';
ACC.L[421] = 'Новые пароли не совпадают';
ACC.L[422] = 'Введите новый пароль';
ACC.L[423] = 'Подтвердите новый пароль';
ACC.L[424] = 'Новый пароль должен состоять из 6 и более знаков';
ACC.L[425] = 'Пароль изменен успешно';
ACC.L[426] = 'Текущий пароль неверен';
ACC.L[427] = 'Новое уведомление';
ACC.L[428] = 'Отправить уведомление';
ACC.L[429] = ['Получатель', 'Тема', 'Сообщение', 'Срок действия'];
ACC.L[430] = ['Все', '&ndash; Отдел &ndash;&nbsp;&nbsp;&nbsp;', '&ndash; Сотрудник &ndash;&nbsp;&nbsp;&nbsp;'];
ACC.L[431] = ['1 неделя', '2 недели', '1 месяц', '3 месяца'];
ACC.L[432] = 'Уведомление отправлено';
ACC.L[433] = 'Уведомление от пользователя';
// 434 moved to 47
ACC.L[435] = 'Добавить тег';
ACC.L[436] = 'Справочный центр';
ACC.L[437] = ['Быстрый старт!', 'Проверьте состояние готовности обслуживания обращений с web-сайта.'];
ACC.L[438] = ['Установка виджета на web-сайт', 'Пошаговая инструкция по установке кода виджета на ваш web-сайт.'];
ACC.L[439] = ['Вопросы и ответы', 'Часто задаваемые вопросы. Возможно, по вашей задаче есть готовое решение.'];
ACC.L[440] = ['Руководство администратора', 'Настройка системы обслуживания. Дизайн и поведение виджета, распределение обращений, управление пользователями и все остальное, что можно настроить.'];
ACC.L[441] = ['Руководство менеджера', 'Статистика и отчеты по заявкам, чатам, звонкам. Отчет по активности и успеваемости агентов.'];
ACC.L[442] = ['Руководство оператора', 'Захват чата из очереди, перевод и конференция в чате, метка тегами, комментироване, быстрые фразы и другие возможности для оператора.'];
ACC.L[443] = ['Техническая поддержка', 'Если решение так и не нашлось, обратитесь к нам, технические специалисты с радостью помогут!'];
ACC.L[444] = 'Новая очередь';
ACC.L[445] = 'Экспорт в XLSX';
ACC.L[446] = 'Формат XLSX';
ACC.L[447] = 'Карточка посетителя';
ACC.L[448] = 'Визит на';
ACC.L[449] = 'Чат пропущен';
ACC.L[450] = 'Чат без ответа';
ACC.L[451] = 'Диалог';
ACC.L[452] = 'Чат на веб-сайте';
ACC.L[453] = 'Не удалось дозвониться, один из абонентов недоступен.';
ACC.L[454] = 'Номер агента';
ACC.L[455] = 'Агент';
ACC.L[456] = 'Посетитель звонил из браузера';
ACC.L[457] = 'Номер посетителя';
ACC.L[458] = 'Запись звонка';
ACC.L[459] = 'Звонок с веб-сайта';
ACC.L[460] = 'Время звонка';
ACC.L[461] = 'Заказ звонка на сайте';
ACC.L[462] = '';
ACC.L[463] = 'Заполнена форма на веб-сайте';
ACC.L[464] = 'Нет информации';
ACC.L[465] = 'История';
ACC.L[466] = 'По компании';
ACC.L[467] = 'Посетитель закрыл сообщение';
ACC.L[468] = 'Контакт';
ACC.L[469] = ['Имя', 'Имя и фамилия'];
ACC.L[470] = 'Компания';
ACC.L[471] = ['Название', 'Название компании'];
ACC.L[472] = ['посетителем','посетителями','посетителями'];
ACC.L[473] = 'Связан с';
ACC.L[474] = 'Добавить новое поле';
ACC.L[475] = 'Найден существующий контакт';
ACC.L[476] = 'Закрепить за посетителем';
ACC.L[477] = 'Связана с';
ACC.L[478] = ['контактом','контактами','контактами'];
ACC.L[479] = 'Найдена существующая компания';
ACC.L[480] = 'Связать с контактом';
ACC.L[481] = 'Нет существующего контакта.<br>Сначала сохраните новый контакт, после с ним можно будет связать компанию.';
ACC.L[482] = 'По посетителю';
ACC.L[483] = 'По контакту';
ACC.L[484] = 'Комментарий к чату';
ACC.L[485] = 'Ваш комментарий по данному чату...';
ACC.L[486] = 'Комментарий';
ACC.L[487] = 'Пожалуйста, добавьте ваш комментарий к чату.';
ACC.L[488] = 'Пожалуйста, поставьте один или несколько тегов к чату.';
ACC.L[489] = 'Перевод диалога по причине отсутствия подтверждения<br>о получении сообщения агентом.';
ACC.L[490] = 'Новое прямое обращение от посетителя %p%.';
ACC.L[491] = 'Сообщение об удержании';
ACC.L[492] = 'Отправить сообщение об удержании';
ACC.L[493] = ['5 минут перерыв', '10 минут перерыв', '15 минут перерыв', 'минут перерыв'];
ACC.L[494] = ['WEB-Онлайн', 'Автоматическое включение через %min%.'];
// через 1 минуту
ACC.L[495] = 'минуту';
ACC.L[496] = 'минуты';
ACC.L[497] = 'минут';
ACC.L[498] = 'Написать письмо';
ACC.L[499] = 'Вы хотите загрузить изображение?';
ACC.L[500] = 'Дополнительная информация';
ACC.L[501] = 'Подождите, идет анализ конфигурации ...';
ACC.L[502] = 'Нет оплаченной лицензии';
ACC.L[503] = ['Веб-сайту не присвоена ни одна виртуальная очередь.', 'Откройте настройки, выберите веб-сайт, справа в окне конфигурации появится список доступных виртуальных очередей. Назначте нужную очередь или несколько.'];
ACC.L[504] = 'Открыть настройки';
ACC.L[505] = ['В виртуальной очереди «%queue%» нет агентов.', 'Откройте настройки, выберите виртуальную очередь, ниже слева, в окне конфигурации появится форма где задается список агентов для обслуживания чатов. Назначте агентов в очередь, и, при необходимости, расставьте приоритеты.'];
ACC.L[506] = ['Для виртуальной очереди «%queue%» нет агентов со статусом WEB-ONLINE.', 'Режим WEB-ONLINE включается вверху справа на панеле инструментов. Зеленый цвет означает, что режим успешно включен. Для просмотра списка агентов участвующих в обслуживаниии чатов откройте настройки, выберите соответствующую виртуальную очередь.'];
ACC.L[507] = 'Услуга активна';
ACC.L[508] = 'Минимальные настройки услуги проверены успешно, конфигурация рабочая.';
ACC.L[509] = ['Нет веб-сайтов.', 'Откройте настройки, в разделе о сайтах добавьте новый сайт. Выберите в списке добавленный сайт, справа в окне настроек сайта назначьте виртуальную очередь.'];
ACC.L[510] = ['В виртуальной очереди «%queue%» нет номеров для связи.', 'В виртуальной очереди для принятия звонков с веб-сайта должны быть указаны номера агентов или номер колл центра. Откройте настройки, выберите виртуальную очередь, ниже справа, в окне конфигурации появится форма где задаются номера агентов или колл центра, а так же, другие настройки правил соединения.'];
ACC.L[511] = ['Настройки генератора лидов не найдены.', 'Чтобы настроить генератор лидов, откройте настройки, выберите веб-сайт, добавьте страницу, выполните конфигурацию и сохраните. Помните, генератор лидов активируется на странице веб-сайта в то время, когда агенты офлайн.'];
ACC.L[512] = ['Руководство разработчика', 'Описание возможностей Javascript API виджета. Используйте язык программирования Javascript для воздействия на поведение виджета.'];
ACC.L[513] = 'Чат в %c%';
ACC.L[514] = ['Ссылка', 'Сохранить'];
ACC.L[515] = 'Открыть местоположение';
ACC.L[516] = 'Аналитика';
ACC.L[517] = 'Категория';
ACC.L[518] = 'Без категории';
ACC.L[519] = 'Вы хотите отправить изображение в чат?';
ACC.L[520] = 'Вы хотите отправить файл в чат?';
ACC.L[521] = 'Продолжить';
ACC.L[522] = 'Ваш комментарий по данному обращению...';
ACC.L[523] = 'Добавьте ';
ACC.L[524] = ['комментарий', 'теги'];
ACC.L[525] = 'Внимание! Вы вошли в учетную запись клиента.<br>Клиент: %con%<br>Идентификатор: %cbi%';
ACC.L[526] = 'Привязать мой системный аккаунт к кабинету клиента.';
ACC.L[527] = 'Привязать';
ACC.L[528] = 'Аккаунт привязан';
ACC.L[529] = 'Войдите в Контакт-центр под пользователем <b>%acc%</b>';
ACC.L[530] = 'Онлайн чат';
ACC.L[531] = ['Поддержка клиентов Контакт-центра', 'Новый чат', 'Тема', 'Сообщение', 'Тема обращения', 'Введите сообщение ...', 'Начать чат', 'Чат направлен в очередь, консультант ответит в ближайшее время ...'];
ACC.L[532] = 'Операторов нет онлайн.<br><br>Обращение направлено в очередь. Вам ответит первый доступный оператор.';
ACC.L[533] = 'участник';
ACC.L[534] = 'участника';
ACC.L[535] = 'участников';
ACC.L[536] = 'Начать новый чат';
ACC.L[537] = ['С разных каналов', 'Оператор не ответил', 'В очереди', 'Из пяти звезд', 'Голосование', 'Первое сообщение', 'Взятие чата'];
ACC.L[538] = ['Палец вверх', 'Палец вниз'];
ACC.L[539] = 'PUSH уведомления';
ACC.L[540] = ['Отписаться', 'Тест', 'Подписаться на этом устройстве', 'Вы уверены что не хотите получать уведомления на устройстве %dev%?'];
ACC.L[541] = ['Получатели', 'Уведомления'];
ACC.L[542] = ['Чат в очереди', 'Новый чат', 'Новое сообщение', 'Приглашение в конференцию'];
ACC.L[543] = 'Устройство успешно подписано на push-уведомления.';
ACC.L[544] = 'Нет устройств разрешивших уведомления';
ACC.L[545] = 'Устройство успешно отписано от push-уведомлений.';
ACC.L[546] = 'Push-уведомление успешно отправлено.';
ACC.L[547] = 'Принимать уведомления';
ACC.L[548] = 'Внимание! На некоторых устройствах показ уведомлений по умолчанию отключен. Включается опция в системных настройках уведомлений или приложения.';
ACC.L[549] = 'Авторизуйтесь для входа в Контакт-центр';
ACC.L[550] = 'Сотрудники';
ACC.L[551] = 'Мои диалоги';
ACC.L[552] = 'Очереди';
ACC.L[553] = 'Настройки';
ACC.L[554] = 'Онлайн';
ACC.L[555] = 'Офлайн';
ACC.L[556] = 'Подключение ...';
