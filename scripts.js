const stnInfo = {
    "98": { "시군명": "동두천", "지점명": "동두천" },
    "99": { "시군명": "파주시", "지점명": "파주" },
    "116": { "시군명": "과천시", "지점명": "관악(레)" },
    "119": { "시군명": "수원시", "지점명": "수원" },
    "202": { "시군명": "양평군", "지점명": "양평" },
    "203": { "시군명": "이천시", "지점명": "이천" },
    "309": { "시군명": "파주시", "지점명": "판문점" },
    "326": { "시군명": "양평시", "지점명": "용문산" },
    "351": { "시군명": "양주시", "지점명": "남면" },
    "352": { "시군명": "양주시", "지점명": "장흥면" },
    "355": { "시군명": "평택시", "지점명": "서탄면" },
    "356": { "시군명": "평택시", "지점명": "고덕면" },
    "358": { "시군명": "평택시", "지점명": "현덕면" },
  <!--  "359": { "시군명": "포천시", "지점명": "선단동" }, -->
    "360": { "시군명": "포천시", "지점명": "내촌면" },
    "361": { "시군명": "포천시", "지점명": "영중면" },
    "364": { "시군명": "성남시", "지점명": "분당구" },
  <!--  "365": { "시군명": "안양시", "지점명": "석수동" }, -->
    "366": { "시군명": "의왕시", "지점명": "오전동 *" },
    "367": { "시군명": "시흥시", "지점명": "신현동" },
    "368": { "시군명": "구리시", "지점명": "수택동" },
    "369": { "시군명": "군포시", "지점명": "수리산길" },
  <!--  "370": { "시군명": "용인시", "지점명": "이동묵리" }, -->
    "371": { "시군명": "용인시", "지점명": "기흥구갈" },
    "372": { "시군명": "양주시", "지점명": "은현면" },
    "373": { "시군명": "양주시", "지점명": "남방" },
    "374": { "시군명": "평택시", "지점명": "청북" },
    "375": { "시군명": "양주시", "지점명": "백석읍" },
    "376": { "시군명": "광명시", "지점명": "광명노온" },
    "377": { "시군명": "안양시", "지점명": "안양만안" },
    "427": { "시군명": "김포시", "지점명": "김포장기" },
    "428": { "시군명": "하남시", "지점명": "하남덕풍" },
    "430": { "시군명": "수원시", "지점명": "경기" },
    "431": { "시군명": "의정부", "지점명": "신곡" },
    "432": { "시군명": "화성시", "지점명": "향남" },
    "433": { "시군명": "부천시", "지점명": "부천" },
    "434": { "시군명": "안양시", "지점명": "안양" },
    "435": { "시군명": "안산시", "지점명": "고잔" },
    "436": { "시군명": "용인시", "지점명": "처인역삼" },
    "437": { "시군명": "광명시", "지점명": "광명" },
    "438": { "시군명": "군포시", "지점명": "군포" },
    "439": { "시군명": "화성시", "지점명": "진안 *" },
    "440": { "시군명": "이천시", "지점명": "설봉" },
    "441": { "시군명": "김포시", "지점명": "김포" },
    "442": { "시군명": "광주시", "지점명": "지월" },
    "443": { "시군명": "안성시", "지점명": "보개" },
    "444": { "시군명": "하남시", "지점명": "하남" },
    "445": { "시군명": "의왕시", "지점명": "의왕" },
    "446": { "시군명": "오산시", "지점명": "남촌" },
    "447": { "시군명": "여주시", "지점명": "북내" },
    "448": { "시군명": "여주시", "지점명": "산북" },
    "449": { "시군명": "양평시", "지점명": "옥천" },
    "450": { "시군명": "고양시", "지점명": "주교" },
    "451": { "시군명": "남양주", "지점명": "오남" },
    "452": { "시군명": "포천시", "지점명": "신북" },
    "453": { "시군명": "광명시", "지점명": "소하" },
    "454": { "시군명": "동두천", "지점명": "하봉암" },
    "455": { "시군명": "가평군", "지점명": "경기가평" },
    "456": { "시군명": "연천군", "지점명": "연천" },
    "457": { "시군명": "하남시", "지점명": "춘궁 *" },
    "458": { "시군명": "광주시", "지점명": "퇴촌 *" },
    "459": { "시군명": "광주시", "지점명": "오포" },
    "460": { "시군명": "광주시", "지점명": "실촌 *" },
    "461": { "시군명": "이천시", "지점명": "마장" },
    "462": { "시군명": "이천시", "지점명": "모가" },
    "463": { "시군명": "여주시", "지점명": "흥천 *" },
    "464": { "시군명": "여주시", "지점명": "점동" },
    "465": { "시군명": "여주시", "지점명": "가남" },
    "466": { "시군명": "여주시", "지점명": "금사 *" },
    "467": { "시군명": "안성시", "지점명": "양성" },
    "468": { "시군명": "안성시", "지점명": "서운" },
    "469": { "시군명": "안성시", "지점명": "일죽 *" },
    "470": { "시군명": "안성시", "지점명": "고삼" },
    "471": { "시군명": "평택시", "지점명": "송탄" },
    "472": { "시군명": "평택시", "지점명": "포승" },
    "473": { "시군명": "포천시", "지점명": "가산" },
    "474": { "시군명": "포천시", "지점명": "영북" },
    "475": { "시군명": "포천시", "지점명": "관인" },
    "476": { "시군명": "포천시", "지점명": "화현" },
    "477": { "시군명": "동두천", "지점명": "상패 *" },
    "478": { "시군명": "연천군", "지점명": "왕징" },
    "479": { "시군명": "연천군", "지점명": "장남" },
    "480": { "시군명": "연천군", "지점명": "미산" },
    "481": { "시군명": "파주시", "지점명": "탄현" },
    "482": { "시군명": "파주시", "지점명": "광탄" },
    "483": { "시군명": "파주시", "지점명": "진동" },
    "484": { "시군명": "남양주", "지점명": "창현" },
    "485": { "시군명": "가평군", "지점명": "신천 *" },
    "486": { "시군명": "가평군", "지점명": "외서" },
    "487": { "시군명": "김포시", "지점명": "대곶" },
    "488": { "시군명": "화성시", "지점명": "송산" },
    "489": { "시군명": "화성시", "지점명": "서신" },
    "491": { "시군명": "연천군", "지점명": "군남" },
    "492": { "시군명": "광명시", "지점명": "학온동" },
    "495": { "시군명": "안성시", "지점명": "공도" },
    "499": { "시군명": "연천군", "지점명": "중면" },
    "503": { "시군명": "파주시", "지점명": "도라산" },
    "504": { "시군명": "포천시", "지점명": "포천" },
    "505": { "시군명": "가평군", "지점명": "가평조종" },
    "506": { "시군명": "파주시", "지점명": "파주금촌" },
    "507": { "시군명": "포천시", "지점명": "창수" },
    "514": { "시군명": "안산시", "지점명": "대부도" },
    "515": { "시군명": "화성시", "지점명": "운평" },
    "516": { "시군명": "안성시", "지점명": "안성" },
    "531": { "시군명": "가평군", "지점명": "가평북면" },
    "532": { "시군명": "의정부", "지점명": "의정부" },
    "533": { "시군명": "이천시", "지점명": "백사" },
    "534": { "시군명": "이천시", "지점명": "장호원" },
    "538": { "시군명": "연천군", "지점명": "신서" },
    "539": { "시군명": "포천시", "지점명": "포천이동" },
    "540": { "시군명": "고양시", "지점명": "고양" },
    "541": { "시군명": "남양주", "지점명": "남양주" },
    "542": { "시군명": "가평군", "지점명": "청평" },
    "544": { "시군명": "화성시", "지점명": "전곡항" },
    "545": { "시군명": "안산시", "지점명": "안산" },
    "546": { "시군명": "광주시", "지점명": "경기광주" },
    "547": { "시군명": "양평군", "지점명": "양동" },
    "549": { "시군명": "용인시", "지점명": "용인" },
    "550": { "시군명": "오산시", "지점명": "오산" },
    "551": { "시군명": "평택시", "지점명": "평택" },
    "565": { "시군명": "시흥시", "지점명": "시흥" },
    "567": { "시군명": "파주시", "지점명": "적성" },
    "568": { "시군명": "포천시", "지점명": "일동" },
    "569": { "시군명": "구리시", "지점명": "구리" },
    "571": { "시군명": "화성시", "지점명": "화성" },
    "572": { "시군명": "성남시", "지점명": "성남" },
    "573": { "시군명": "양평군", "지점명": "청운" },
    "574": { "시군명": "여주시", "지점명": "대신" },
    "575": { "시군명": "용인시", "지점명": "용인이동" },
    "576": { "시군명": "용인시", "지점명": "백암" },
    "589": { "시군명": "고양시", "지점명": "고양고봉" },
    "590": { "시군명": "과천시", "지점명": "과천" },
    "598": { "시군명": "양주시", "지점명": "양주" },
    "599": { "시군명": "포천시", "지점명": "광릉" },
    "652": { "시군명": "연천군", "지점명": "연천청산" },
    "692": { "시군명": "연천군", "지점명": "백학" },
    "966": { "시군명": "안산시", "지점명": "풍도" },
    "967": { "시군명": "화성시", "지점명": "도리도" }
};



function fetchWeatherData() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 4);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const dateTimeString = `${year}${month}${day}${hour}${minute}`;

    const stnIds = Object.keys(stnInfo);
    let rowsHTML = '';
    let allStnData = [];

    stnIds.forEach(stnId => {
        const stn = stnInfo[stnId];
        const apiUrl = `https://afso.kma.go.kr/cgi/aws3/nph-aws_txt_min5?${dateTimeString}&0&0&${stnId}`;
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const fullUrl = proxyUrl + apiUrl;

        fetch(fullUrl)
            .then(response => response.arrayBuffer())
            .then(data => {
                const decoder = new TextDecoder("euc-kr");
                const text = decoder.decode(data);
                const lines = text.trim().split('\n');
                const firstLine = lines[1];
                const columns = firstLine.split(',');

                let stnData = {
                    "시군명": stn["시군명"],
                    "지점명": stn["지점명"],
                    "강수감지": cleanData(columns[1]),
                    "15분": cleanData(columns[2]),
                    "60분": cleanData(columns[3]),
                    "3H": cleanData(columns[4]),
                    "6H": cleanData(columns[5]),
                    "12H": cleanData(columns[6]),
                    "1Day": cleanData(columns[7])
                };

                allStnData.push(stnData);

                if (allStnData.length === stnIds.length) {
                    allStnData.forEach(data => {
                        rowsHTML += '<tr>';
                        Object.values(data).forEach(col => {
                            rowsHTML += `<td>${col}</td>`;
                        });
                        rowsHTML += '</tr>';
                    });

                    document.getElementById('weatherData').innerHTML = rowsHTML;
                }
            })
            .catch(error => console.error('데이터 가져오는 중 오류 발생:', error));
    });

    const formattedTime = `${year}-${month}-${day} ${hour}:${minute}`;
    document.getElementById('timeInfo').textContent = `관측시각: ${formattedTime}`;
}

function cleanData(value) {
    if (typeof value === 'undefined' || value.trim() === '' || value.trim() === '.') {
        return '0';
    }
    return value.trim();
}


window.onload = fetchWeatherData;


function sortTable(column, type) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("weatherTable");
switching = true;
// 정렬 방향을 내림차순으로 초기 설정:
dir = "desc"; // 기본 정렬을 내림차순으로 설정

while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[column];
        y = rows[i + 1].getElementsByTagName("TD")[column];

        if (type === 'num') {
            if (dir == "asc" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                shouldSwitch = true;
                break;
            } else if (dir == "desc" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        } else {
            if (dir == "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (dir == "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
}
