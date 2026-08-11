import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロモ",
		'zh-tw': "蚊香蝌蚪",
		th: "เนียวโรโมะ",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "まだ 脚が 生えた ばかりで うまく 歩けない。 水の中を 泳いでる ほうが 好きなようだ。",
		'zh-tw': "由於腳才剛長出來， 因此還不太擅長走路。 似乎更喜歡在水中游泳。",
		th: "ขาพึ่งงอกออกมาไม่นาน จึงยังเดินได้ไม่คล่อง ดูเหมือนจะชอบว่ายไปมาในน้ำมากกว่า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
				th: "เหยียบ",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "しっぽビンタ",
				'zh-tw': "擺尾拍打",
				th: "ตบด้วยหาง",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
				th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767116,
				tcgplayer: 568013,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [60],
};

export default card;
