import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "イシヘンジン",
		'zh-tw': "巨石丁",
		th: "อิชิเฮนจิน",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "１年に 一度 きまった 日時に どこから ともなく 集まり 輪に なって 並ぶ 習性が ある。",
		'zh-tw': "每年會有一天，牠們會在特定的時間突然出現，聚集在一起排成一個圈。",
		th: "ในวันและเวลาที่กำหนดไว้เฉพาะในปีละหนึ่งครั้ง จะปรากฏตัวออกมาจากที่ไหนสักแห่งและรวมตัวเรียงกันเป็นวงกลม",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "だいちのこどう",
				'zh-tw': "大地鼓動",
				th: "เสียงหัวใจแห่งธรณี",
			},
			damage: "30+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、30ダメージ追加。",
				'zh-tw': "若場上有競技場卡，則增加30點傷害。",
				th: "ถ้ามีการ์ดสเตเดียมอยู่บนกระดาน การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			},
		},
		{
			name: {
				ja: "ギガハンマー",
				'zh-tw': "兆幅鐵錘",
				th: "กิก้าแฮมเมอร์",
			},
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ギガハンマー」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「兆幅鐵錘」。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [กิก้าแฮมเมอร์] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533397,
				tcgplayer: 568984,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [874],
};

export default card;
