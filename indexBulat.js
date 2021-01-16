//Забиваем выбранные машины
cars = [
        {
            car_number: 'О555ОО',
            driver: 'Petrov I.I.',
            car_max_load: 2000,
            car_loaded: '0',
            route_length: '0',
            route_time: '0',
            idx: 0,
            start_time: '',
            finish_time: ''   
        },
        {
            car_number: 'Х666ХХ',
            driver: 'Boshirov I.I.',
            car_max_load: 500,
            car_loaded: '0',
            route_length: '0',
            route_time: '0',
            idx: 0,
            start_time: '',
            finish_time: ''   
        },
        {
            car_number: 'Н777НН',
            driver: 'Shpil I.I.',
            car_max_load: 1000,
            car_loaded: '0',
            route_length: '0',
            route_time: '0',
            idx: 0,
            start_time: '',
            finish_time: ''   
        },
];

//Начальный адрес отвправки
const storage = {lat: 55.8303379, lon: 49.0275216, address: 'Татарстан, Казань, Горьковское шоссе, 28 к5'}
//Адреса отправки
var list = [
   { id: 1, len: 80, address: 'Татарстан, Казань, Кривая, 21', order: 0, half_of_day: 0, lat: 55.778442, lon: 49.155104 }, 
   { id: 2, len: 90, address: 'Татарстан, Казань, Салиха Батыева, 17', order: 0, half_of_day: 0, lat: 55.754790, lon: 49.245473 }, 
   { id: 3, len: 20, address: 'Татарстан, Казань, Салиха Батыева, 1', order: 0, half_of_day: 0, lat: 55.751482, lon: 49.246695 }, 
   { id: 4, len: 20, address: 'Татарстан, Казань, Проспект победы, 98', order: 0, half_of_day: 0, lat: 55.768355, lon: 49.221776 },
   { id: 5, len: 40, address: 'Татарстан, Казань, Проспект победы, 100', order: 0, half_of_day: 0, lat: 55.768891, lon: 49.220832 }, 
   { id: 6, len: 60, address: 'Татарстан, Казань, Достоевского, 74А', order: 0, half_of_day: 0, lat: 55.787123, lon:  49.158112 }, 
   { id: 7, len: 100, address: 'Татарстан, Казань, Заря, 24', order: 0, half_of_day: 0, lat: 55.808452, lon:  49.178162 }, 
   { id: 8, len: 100, address: 'Татарстан, Казань, Голубятникова, 1', order: 0, half_of_day: 0, lat: 55.836570, lon: 49.102533 },
   { id: 9, len: 45, address: 'Татарстан, Казань, Максимова, 10', order: 0, half_of_day: 0, lat: 55.860822, lon: 49.095014 }, 
   { id: 10, len: 35, address: 'Татарстан, Казань, Побежимова, 42', order: 0, half_of_day: 0, lat: 55.860403, lon: 49.077695 }, 
   { id: 11, len: 75, address: 'Татарстан, Казань, Восстания, 121', order: 0, half_of_day: 0, lat: 55.831175, lon: 49.050898 }, 
   { id: 12, len: 70, address: 'Татарстан, Казань, Московская, 21', order: 0, half_of_day: 0, lat: 53.187909, lon: 45.015109 },
   { id: 13, len: 110, address: 'Татарстан, Казань, Модельная, 8', order: 0, half_of_day: 0, lat: 55.748503, lon:  49.140595 } 
//    { id: 14, len: 220, address: 'Татарстан, Казань, Модельная, 13', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 15, len: 70, address: 'Татарстан, Казань, Курашова, 30', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 16, len: 250, address: 'Татарстан, Казань, Япеева, 10', order: 0, half_of_day: 0, lat: 0, lon: 0 },
//    { id: 17, len: 120, address: 'Татарстан, Казань, Журналистов, 20', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 18, len: 200, address: 'Татарстан, Казань, Журналистов, 22', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 19, len: 10, address: 'Татарстан, Казань, Металлистов, 8', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 20, len: 15, address: 'Татарстан, Казань, Курская, 15', order: 0, half_of_day: 0, lat: 0, lon: 0 },
//    { id: 21, len: 130, address: 'Татарстан, Казань, Глазовская, 3', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 22, len: 220, address: 'Татарстан, Казань, Чапаева, 21', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 23, len: 10, address: 'Татарстан, Казань, Мусина, 59А', order: 0, half_of_day: 0, lat: 0, lon: 0 }, 
//    { id: 24, len: 15, address: 'Татарстан, Казань, Мулланура Вахитова, 10', order: 0, half_of_day: 0, lat: 0, lon: 0 },
]



//const ip = '172.16.1.200';
//const port = 5080   // локальный 5000
//  const ip = '192.168.0.109';
const urlServer = 'router.project-osrm.org'
var sortedArrCoords = [];
//Массив с различными цветами для маршрутов
var routeColors = ['red', 'green', 'black', 'blue', 'fuchsia', 'yellow', "Fuchsia", "Purple", "Red", "Maroon", "", "Yellow", "Olive", "Lime", "Green", "Aqua", "Teal", "Blue", "Navy", "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenRod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon", "Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki"];
//Координаты для построения маршрута 
var arrLatLng = [];
//Массив маршрутов
var rResult = [];
//Массив с рисунками маршрутов на карте
var arrCtrl = [];
// Время на разгрузку для каждого заказа контстантой в секундах
const time = 2400;
// Время на погрузку на складе при повторном маршруте
const pogruz = 2400;
// Возможный перегруз машины в процентах. Для машны 2000кг это 200кг. Соответсвенно в машину можно грузить 2200кг максимум
const percentOverWeight = 10;

const formatter = new L.Routing.Formatter({
    language: 'ru'
});

var idxPereschet = -1;

//Находим индекс адреса с порядком
function findMinIndexOfOrder(k, arrCoords) {
    var idx = -1;
    for (var j = 0; j < arrCoords.length; j++) {
        if (arrCoords[j].order == k) {
            idx = j;
            break;
        }
    }
    //Либо возвращет индекс, либо 0 говорящий о том что нет адреса с таким порядком 
    return idx;
}
//Удаляем все с карты
function deleteAllFromMap() {
    //Удаляем с карты старые маршруты если есть
    if (arrCtrl.length > 0) {
        for (var k = 0; k < arrCtrl.length; k++) {
            map.removeControl(arrCtrl[k]);
        }
    }
}

//Вытаскиваем координаты для адресов,  координаты дожны уже приходят из вне
function findCoordsByAddress(list) {
    var arrCoords = [];
    //Находим координаты адресов
    for (var k = 0; k < list.length; k++) {
        arrCoords.push({ x: parseFloat(list[k].lat), y: parseFloat(list[k].lon), id: list[k].id, len: list[k].len, order: list[k].order, address: list[k].address, half_of_day: list[k].half_of_day });
    }
    return arrCoords;
}

//Находит один из ближайших адресов
async function findNearestAddress(arr, ordr) {
    var arrCoords = [];
    var res = { time: 0, distance: 0, index: 0, ok: false };

    for (var i = 0; i < arr.length; i++) {
        //Проставляем индексы дабы потом вытащить
        arr[i].index = i;
        arrCoords.push(arr[i]);
    }

    var proms = [];
    var arr = [];
    //Индекс в массиве адресов
    var idx;
    var arrive_time;
    var distance;

    //берется склад
    //url = "http://" + ip + ":"+port+"/route/v1/driving/";
    url = "http://" + urlServer + "/route/v1/driving/";
    for (var i = 1; i < arrCoords.length; i++) {
        //Если нет никакой сортировки то просто берем ближайший адрес
        if (arrCoords[i].order == ordr) {
            arr.push(arrCoords[i]);
            proms.push(fetch(url + arrCoords[0].x + ',' + arrCoords[0].y + ';' + arrCoords[i].x + ',' + arrCoords[i].y));
        }
    }

    await Promise.all(proms)
        .then(ps => Promise.all(ps.map(p => p.json())))
        .then(js => {
            let dist = Math.min.apply(Math, js.map(function (o) { return o.routes[0].distance; }));
            let obj = js.find(function (o) { distance = o.routes[0].distance; arrive_time = o.routes[0].duration; return o.routes[0].distance == dist; })
            idx = js.indexOf(obj);
            if (arr.length > 0) {
                idx = arr[idx].index;
            }
        });


    if (typeof idx !== "undefined" && idx != -1) {
        res.time = arrive_time;
        res.distance = distance;
        res.index = idx;
        res.ok = true;
    }
    //Возвращает объект с временем маршрута и индексом в общем массиве
    return res;
}

//Сортирует массив от меньшего к большему по времени
function sortByTime(arr) {
    arr.sort((a, b) => a.time > b.time ? 1 : -1);
}

//Сортирует массив от меньшего к большему по времени и по интервали
function sortByTimeAndInterval(arr) {
    arr.sort(function (x1, x2) {
        if (x1.interval < x2.interval) return -1;
        if (x1.interval > x2.interval) return 1;
        // при равных score сортируем по time
        if (x1.interval == x2.interval) {
            if (x1.time < x2.time) return -1;
            if (x1.time > x2.time) return 1;
            // // при равных time сортируем по len(вес)
            // if (x1.time == x2.time) {
            //     if (x1.len < x2.len) return -1;
            //     if (x1.len > x2.len) return 1;
            // }
        }
    });
}

//Переводим секунды в читабельное время
function secondsToString(d) {
    var t = ((d.getSeconds() >= 30 ? d.getMinutes() + 1 : d.getMinutes() < 10 ? '0' : '') == 60 ? d.getHours() + 1 + ':' + '00' : d.getHours() + ":" +
        ((d.getSeconds() >= 30 ? d.getMinutes() + 1 : d.getMinutes()) < 10 ? '0' : '') + (d.getSeconds() >= 30 ? d.getMinutes() + 1 : d.getMinutes()));
    return t;
}

var carsGlobal = 0;
async function createRoute(list, cars) {
    carsGlobal++;
    //Координаты для построения маршрута 
    arrLatLng = [];
    //Массив с принятыми авто
    var arrCars = [];
    var max = 0; //Масса машины
    var ordered;

    //Удаляем с карты старые маршруты если есть
    deleteAllFromMap();

    //Массив с маршрутами на карте map
    arrCtrl = [];

    //Получаем координаты адресов заказов
    var arrCoords = findCoordsByAddress(list);


    //Получаем начальное время погрузки
    var h =''// $('.time_element').val().slice(0, 2);
    var m ='' //$('.time_element').val().slice(3, 5);
    if (h == '') {
        h = '09'
    }
    if (m == '') {
        m = '00'
    }

    //Начало дня
    var d = new Date();
    //Конец дня
    var half_day = new Date();
    half_day.setHours(15, 00, 0);
    var d2 = new Date();
    d2.setHours(15, 00, 0);

    //Проверяем маршрут на повтор
    for (var k = 0; k < cars.length; k++) {
        //По маршурутам проверяем в обратном порядке что бы найти поседний маршрут этой машины
        for (var i = rResult.length - 1; i >= 0; i--) {
            //Находим машину для повторного рейса
            if (cars[k].car_number == rResult[i][0].car_number) {
                //Проверяем подходит ли по времени (finish_time должен быть меньше 17:00)
                var a = rResult[i][0].finish_time.split(':')
                if (a[0].length == 2) {
                    var h1 = rResult[i][0].finish_time.slice(0, 2);
                    var m1 = rResult[i][0].finish_time.slice(3, 5);
                } else {
                    var h1 = rResult[i][0].finish_time.slice(0, 1);
                    var m1 = rResult[i][0].finish_time.slice(2, 4);
                }
                d.setHours(h1, m1, 0);
                d.setSeconds(d.getSeconds() + parseInt(pogruz));
                if (d < d2) {
                    arrCars.push(cars[k]);
                    //Прибавляем время погрузки на складе
                    arrCars[arrCars.length - 1].start_time = secondsToString(d);
                }
                break;
            }
        }
    }

    //Если повторных машин не нашли берем все
    if (arrCars.length == 0) {
        for (var k = 0; k < cars.length; k++) {
            arrCars.push(cars[k]);
        }
    }

    //Если есть какие то
    while (arrCoords.length != 0 && arrCars.length > 0) {
        // if (arrCoords.length == 0) {
        //     break;
        // }
        var summ = 0; //Сумма масс всех заказов
        var arr = []; //Массив с одним маршрутом
        var carArr = []; //Машина
        var correct_route = false;

        //Рассчитываем оверзагрузгу для каждой машины это константа в процентах  admin.js/percentOverWeight
        //далее переприсваивам в локальный массив для дальнейшей обработки
        var i = (parseInt(arrCars[0].car_max_load) / 100) * percentOverWeight;
        max = parseInt(arrCars[0].car_max_load) + parseInt(i);

        //Устанавливаем время погрузки
        if (arrCars[0].start_time == '') {
            d.setHours(h, m, 0);
            arrCars[0].start_time = secondsToString(d);
        }

        while (!correct_route) {

            if (arrCoords.length == 0) {
                if (arr.length == 0) {
                    console.log('нет не одного адреса в маршруте');
                    alert('Выберите другой автомобиль');
                    break;
                }
                arrCars[0].car_loaded = summ;
                //Рассчитываем время до склада обратно
                var lastarr = [];
                lastarr.push({ x: storage.lat, y: storage.lon, id: 0, len: 0, order: 0, half_of_day: 0, address: storage.address });
                lastarr.unshift(arr[arr.length - 1]);

                var res = await findNearestAddress(lastarr, 0);
                d.setSeconds(d.getSeconds() + parseInt(time) + parseInt(res.time));
                lastarr[res.index].arrive_time = secondsToString(d);
                lastarr[res.index].distance = res.distance;
                lastarr[res.index].time = res.time;
                arr.push(lastarr[res.index]);
                arrCars[0].finish_time = arr[arr.length - 1].arrive_time;

                break;
            }

            //Если есть заказы с порядком то не учитываем время, просто считаем время и перестраиваем маршрут
            for (var i = 0; i < arrCoords.length; i++) {
                if (arrCoords[i].order != 0) {
                    ordered = true;
                    break;
                }
            }

            k = -1;
            if (arr.length == 0) {
                //Берем начальный адрес склада и строим маршрут от него
                arrCoords.unshift({ x: storage.lat, y: storage.lon, id: 0, len: 0, order: 0, address: storage.address });
                if (ordered) {
                    //Находится айди заказа в обшем массиве. Заказы же добавляются по одному
                    //Соответсвенно мы каждый раз проверяем текущий порядковый номер с массивом и ищем там заказ с таким номером
                    //Пример: Добавили уже два заказа, след номер будет 3. Соответсвенно в общем массиве мы ищем order 3. Если такой есть, то считаем его приоритетом не считая инвервал
                    var k = findMinIndexOfOrder(arr.length + 1, arrCoords);
                }
            } else {
                //Берем последний адрес в маршруте и начинаем строить уже от этого адреса
                arrCoords.unshift(arr[arr.length - 1]);
                if (ordered) {
                    var k = findMinIndexOfOrder(arr.length, arrCoords);
                }
            }

            //Находим ближайший адрес или адрес у которого есть интервал и он попадает в него
            if (d < half_day) {
                /*
                *   Находим ближайший адрес из массива адресов
                *   Учитываем интервалы, суть логики такая. Собираем массив из расстояний всех адресов до последней точки
                *   Первоначально это склад, потом следующиц адрес и так далее.
                */
                var interval = false;
                var arr_with_intervals = [];
                var arr_all = [];
                var res = { time: 0, distance: 0, index: 0, ok: false };

                //Если в массиве есть заказ с текущим пордковым номером, то берем его
                if (k != -1) {
                    //Находим ближайший маршрут по order   
                    var test = await findNearestAddress(arrCoords, arrCoords[k].order);
                    arr_all.push(test);
                } else {
                    //Разбиваем все заказы в два массива, простой и интервальный
                    for (var k = 1; k < arrCoords.length; k++) {
                        var tmp_arr = [arrCoords[0], arrCoords[k]]
                        //не нужно брать сортированные заказы они беруться отдельно выше по условию ordered
                        if (arrCoords[k].order == 0) {
                            var test = await findNearestAddress(tmp_arr, 0);
                            test.index = k;
                            //Если у этого заказа есть интервал, проверяем время доставки этого заказа со своим интервалом
                            if (arrCoords[k].half_of_day != 0) {
                                var a = arrCoords[k].half_of_day.split('-')
                                //Добавляется новый параметр для сортировки по интервалам, записываем туда начало интервала
                                test.interval = parseInt(a[0].slice(0, 2));
                                interval = true;
                                arr_with_intervals.push(test);
                            } else {
                                arr_all.push(test);
                            }                                              
                        }
                    }
                }

                //Флаг что достали заказ попадающий в интервал
                var got_interval = false;
                var difference = 0;
                //Если были заказы с интервалом то
                if (interval == true) {
                    //Сортируем по интервалам а потом по времени
                    sortByTimeAndInterval(arr_with_intervals);
                    for (var k = 0; k < arr_with_intervals.length; k++) {
                        var tmpDate = new Date();
                        var intervalStart = new Date();
                        var intervalEnd = new Date();
                        tmpDate = new Date(d);
                        //Получаем время прибытия
                        if (arr.length == 0 || arr_with_intervals[k].distance == 0) {
                            tmpDate.setSeconds(tmpDate.getSeconds() + parseInt(arr_with_intervals[k].time));
                        } else {
                            tmpDate.setSeconds(tmpDate.getSeconds() + parseInt(time) + parseInt(arr_with_intervals[k].time));
                        }

                        //Получаем интервал
                        var a = arrCoords[arr_with_intervals[k].index].half_of_day.split('-')
                        intervalStart.setHours(a[0].slice(0, 2), a[0].slice(3, 5), 0);
                        intervalEnd.setHours(a[1].slice(0, 2), a[1].slice(3, 5), 0);


                        //Если время приезда заказа попала в свой интервал то считаем его приоритетом,
                        //Так же если время и дистанция равны нулю, считаем что это этот же адрес
                        if (tmpDate >= intervalStart && tmpDate <= intervalEnd) {
                            //Сохраняем айди заказа в массив
                            res = arr_with_intervals[k];
                            //Флаг что еть заказ в интервале своем
                            got_interval = true;
                            //Выходим из цикла так как сортированном массиве первый заказа попавший в свой интервал и будет нужным
                            break;
                        } else if (arr_with_intervals[k].time == 0 && arr_with_intervals[k].distance == 0) {
                            if (tmpDate >= intervalStart && tmpDate <= intervalEnd) {
                                //Сохраняем айди заказа в массив
                                res = arr_with_intervals[k];
                                //Флаг что еть заказ в интервале своем
                                got_interval = true;
                                //Выходим из цикла так как сортированном массиве первый заказа попавший в свой интервал и будет нужным
                                break;
                            }
                        }
                    }
                }

                //Если заказов попавших в интервал не было, берем ближайший заказ из остальных
                var got_zakaz = false;
                if (got_interval == false) {
                    //Если вообще адерса есть обычные
                    if (arr_all.length > 0) {
                        got_zakaz = true;
                        sortByTime(arr_all);
                        //Просто берем ближайший заказа после соритировки он [0] позиции
                        res = arr_all[0];
                    }
                }
                //Если заканчиваются обычные заказы и интервалы не найдены
                //Нужно проверить, возможно есть интервалы дальше по времени
                if (!got_interval && !got_zakaz && arr_all.length == 0 && arr_with_intervals.length > 0) {
                    var intervalStart = new Date();
                    var intervalEnd = new Date();
                    res = arr_with_intervals[0]
                    //Получаем начало интервала для заказа с интервалом
                    var a = arrCoords[arr_with_intervals[0].index].half_of_day.split('-')
                    intervalStart.setHours(a[0].slice(0, 2), a[0].slice(3, 5), 0);
                    //Получаем последнее время прибытия заказа(без учета разгрузки)
                    if (arr.length > 0) {
                        a = arr[arr.length - 1].arrive_time.split(':')
                        intervalEnd.setHours(a[0], a[1], 0);
                        //Прибавляем время разгрузки на этом заказе если до этого уже куда то приехали и это не склад
                        intervalEnd.setSeconds(intervalEnd.getSeconds() + parseInt(time));
                    } else {
                        intervalEnd = new Date(d);
                    }

                    //Проверка если конечное время доставки с разгрузкой превышает или равен началу интервала след заказа, значит заказ проскочил свой интервал и его нужно убрать из массива общего
                    //
                    if (intervalEnd >= intervalStart) {
                        //Если сортировка то заказа нужно восстановить в левый верхний грид стартовых заказаов
                        if (ordered) {
                            //Получаем уже имеющиеся заказы в маршруте средствами json
                            var car_number = $('#car-complete tr input:checkbox:checked').parents('tr').attr('car-number');
                            var orderJson = $('#car-complete tr[car-number = "' + car_number + '"]').attr('order-json');
                            var orderArr = jQuery.parseJSON(orderJson);
                            var row;
                            var lat;
                            var lon;
                            //Массив с индексами заказов которые надо удалить
                            var idx = [];
                            //Идем по всем заказам в маршруте
                            for (var i = 0; i < orderArr.length; i++) {
                                //Если нашли заказ который хотим удалить то
                                if (orderArr[i][0] == arrCoords[res.index].id) {
                                    idx.push(i);
                                    //Восстанавливаем этот заказ в грид основных заказов
                                    (orderArr[i][16] == 0 ? lat = '' : lat = orderArr[i][16]) == undefined ? lat = '' : orderArr[i][16];
                                    (orderArr[i][17] == 0 ? lon = '' : lon = orderArr[i][17]) == undefined ? lon = '' : orderArr[i][17];

                                    row = '<tr id="order-tr-' + orderArr[i][0] + '"> \n\
                                            <td><input type="checkbox" id="check-' + orderArr[i][0] + '" /> </td> \n\
                                            <td class="t-id">' + orderArr[i][0] + '</td> \n\
                                            <td class="order">' + orderArr[i][1] + '</td> \n\
                                            <td class="address"><span>' + orderArr[i][2] + '</span><button type="button" id="button-' + orderArr[i][0] + '" class="btn btn-info show-tooltip">Изменить адрес</button></td> \n\
                                            <td class="comment" title="' + orderArr[i][3] + '">' + orderArr[i][3].substr(0, 28) + '...</td> \n\
                                            <td class="phone" style="display:none">' + orderArr[i][4] + '</td> \n\
                                            <td class="client_phone" style="display:none">' + orderArr[i][5] + '</td> \n\
                                            <td class="dealer" style="display:none">' + orderArr[i][6] + '</td> \n\
                                            <td class="vip" style="display:none">' + orderArr[i][7] + '</td> \n\
                                            <td class="trash" style="display:none">' + orderArr[i][8] + '</td> \n\
                                            <td class="delivery" style="display:none">' + orderArr[i][9] + '</td> \n\
                                            <td class="lift" style="display:none">' + orderArr[i][10] + '</td> \n\
                                            <td class="weight">' + orderArr[i][11] + '</td> \n\
                                            <td class="lat">' + lat + '</td> \n\
                                            <td class="lon">' + lon + '</td> \n\
                                            <td class="interval-time"></td> \n\
                                        </tr>';
                                    $('#table-draggable1 > tbody:last-child').append(row);
                                    break;
                                }
                            }

                            idx.sort();
                            idx.reverse();
                            //Пройдем по всем заказам маршрута и удалим
                            for (var i = 0; i < idx.length; i++) {
                                orderArr.splice(idx[i], 1);
                            }


                            //Сохраняем новый полученный json
                            var orderJson = JSON.stringify(orderArr);
                            $('#car-complete tr[car-number = "' + car_number + '"]').attr('order-json', orderJson)

                            //Удаляем не влезший в свой интервал заказа
                            arrCoords.splice(res.index, 1);
                            //Удаляем склад спереди
                            arrCoords.splice(0, 1);

                        }
                        //В противном случае заказа находится в гриде и его не нужно никуда восстанавливать, поэтому просто удаляем из массива обработки 
                        else {
                            //Удаляем не влезший в свой интервал заказа
                            arrCoords.splice(res.index, 1);
                            //Удаляем склад спереди
                            arrCoords.splice(0, 1);
                        }
                    } else {
                        difference = (intervalStart - intervalEnd) / 1000;
                        res.time = difference;
                        got_interval = true;
                    }
                }
            }

            if (got_interval || got_zakaz) {
                //Прибавляем вес заказа
                summ = summ + parseInt(arrCoords[res.index].len);

                //Прибавим время в пути до адреса
                if (arr.length == 0 || res.distance == 0) {
                    if (difference == 0) {
                        d.setSeconds(d.getSeconds() + parseInt(res.time));
                    } else {
                        d.setSeconds(d.getSeconds() + parseInt(time) + parseInt(res.time));
                    }
                } else {
                    d.setSeconds(d.getSeconds() + parseInt(time) + parseInt(res.time));
                }

                //Если конечное время доставки заказа не вышло за пределы времени или масса не вышла за массу машины то добавляем этот заказ в маршрут
                //В противном случае отправляем машину на склад.
                if (d < half_day && summ <= max) {

                    if (arr.length == 0) {
                        //Склад добавляем
                        arr.push(arrCoords[0]);
                    }
                    // console.log(arrCoords[res.index].address, ' --- ', arrCoords[res.index].half_of_day, ' --- ', arrCoords[res.index].len, ' --- ', secondsToString(d))
                    arrCoords[res.index].arrive_time = secondsToString(d);
                    arrCoords[res.index].distance = res.distance;
                    arrCoords[res.index].time = res.time;
                    //Записываем найденный ближ маршурт
                    arr.push(arrCoords[res.index]);
                    //Удаляем ближайший адрес к складу, удаляем первым что бы не нарушить порядок в массиве
                    arrCoords.splice(res.index, 1);
                    //Теперь удаляем последний адрес
                    arrCoords.splice(0, 1);

                } else {
                    //Если машина заполнилась или время перешло границу 17:00
                    if (arr.length == 0) {
                        console.log('нет не одного адреса в маршруте');
                        alert('Выберите другой автомобиль');
                        break;
                    }
                    summ = summ - parseInt(arrCoords[res.index].len);
                    d.setSeconds(d.getSeconds() - parseInt(time) - parseInt(res.time));

                    //Нужно убрать адрес из массив
                    arrCoords.splice(0, 1);
                    arrCars[0].car_loaded = summ;
                    //Рассчитываем время до склада обратно
                    var lastarr = [];
                    lastarr.push({ x: storage.lat, y: storage.lon, id: 0, len: 0, order: 0, half_of_day: 0, address: storage.address });
                    lastarr.unshift(arr[arr.length - 1]);
                    arrCoords.splice(0, 1);

                    var res = await findNearestAddress(lastarr, 0);
                    d.setSeconds(d.getSeconds() + parseInt(time) + parseInt(res.time));
                    lastarr[res.index].arrive_time = secondsToString(d);
                    lastarr[res.index].distance = res.distance;
                    lastarr[res.index].time = res.time;
                    arr.push(lastarr[res.index]);
                    arrCars[0].finish_time = arr[arr.length - 1].arrive_time;
                    correct_route = true;
                }
            }
        }

        if (arr.length > 0) {
            //Глобальный индекс порядка создания маршрутов
            arrCars[0].idx = carsGlobal;

            for (var i = 1; i < arr.length; i++) {
                arrCars[0].route_length = parseFloat(arrCars[0].route_length) + parseFloat(arr[i].distance);

                if (arr[i].time != 0 && i != 1) {
                    arrCars[0].route_time = parseFloat(arrCars[0].route_time) + parseFloat(time) + parseFloat(arr[i].time);
                } else {
                    arrCars[0].route_time = parseFloat(arrCars[0].route_time) + parseFloat(arr[i].time);
                }
            }

            arrCars[0].route_length = formatter.formatDistance(arrCars[0].route_length);
            arrCars[0].route_time_s = arrCars[0].route_time;
            arrCars[0].route_time = formatter.formatTime(arrCars[0].route_time);

            //Сохраняем машину
            carArr.push(arrCars[0]);
            //Запиливаем в машину массив с заказами
            carArr.push(arr);
            if (idxPereschet != -1) {
                //Вставляем машину по конкретному индексу
                rResult.splice(idxPereschet, 0, carArr);
            } else {
                rResult.push(carArr);
            }

        }
        //Убираем заполненную машину из массива
        arrCars.splice(0, 1);

    }
     console.log(rResult);
     for (var i = 0; i < rResult.length; i++) {
        await showSelectedRoute(i);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Иконка склада
var greenIcon = L.icon({
    iconUrl: 'image/placeholder.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

//Показать выбранный маршрут
async function showSelectedRoute(id) {
    arrLatLng = [];
    id = parseInt(id);
    //Формируем массив с понятными для leaflet координатами по каждому маршруту
    for (var k = 0; k < rResult[id][1].length; k++) {
        arrLatLng.push(L.latLng(rResult[id][1][k].x, rResult[id][1][k].y))
    }

    //Рирсуем полученный сортированный маршрут
    var control = L.Routing.control({
        //Точки
        waypoints: arrLatLng,
        //Параметры линиии маршрута на карте
        lineOptions: {
            //Запрещать создавать новые точки
            addWaypoints: false,
            styles: [{ color: routeColors[id], opacity: 1, weight: 3 }]
        },
        //Маркер для точек, проходит по всем точкам добавляя всплывающее окно с сообщением и убирает возможность двигать точку
        createMarker: function (z, wp) {
            if (z == 0 || z == (rResult[id][1].length - 1)) {
                return L.marker(wp.latLng, {
                    draggable: false,
                    icon: greenIcon
                }).bindPopup('Номер адреса: ' + z + '<br>' + rResult[id][1][z].address);
            } else {
                return L.marker(wp.latLng, {
                    draggable: false
                }).bindPopup('Номер адреса: ' + z + '<br>' + rResult[id][1][z].address);
            }
        },
        //Адрес сервера OSRM
        //serviceUrl: 'http://' + ip + ':'+port+'/route/v1',
        serviceUrl: 'http://' + urlServer + '/route/v1',
        //Локализация вывода
        formatter: new L.Routing.Formatter({
            language: 'ru'
        }),
        //Геокодер
        geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);

    //Убираем показ ввода адресов и маршрута с повортами
    control._container.style.display = "None";
    //Убираем кнопки зума и водный знак внизу карты
    map._controlContainer.style.display = "None";
    //Сохраняем массив с объектами линиями на карте и индекс машины
    arrCtrl.push(control);
    //  await sleep(2000);
}

//Создаем карту с видом на координаты, если координаты убрать и убрать точки, то будет серый экран
var map = L.map('map').setView([55.7935018, 49.1159794], 10);

L.tileLayer('http://tiles.maps.sputnik.ru/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1
}).addTo(map);

//Строим и показываем все возможные маршруты
createRoute(list, cars);
