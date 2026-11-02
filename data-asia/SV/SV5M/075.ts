import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
		'zh-tw': "火斑喵",
		th: "เนียบี",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "暇さえあれば 舐めて 毛づくろい。 お腹に たまった 抜け毛に 火を つけて 炎技を 放つ。",
		'zh-tw': "一有時間就會去舔身體整理毛髮。會燃燒積在腹中 的落毛來使出火屬性招式。",
		th: "ถ้ามีเวลาว่างก็จะเลียแต่งขน เผาขนหลุดร่วงที่สะสมอยู่ในท้องแล้วปล่อยออกมาเป็นท่าไฟ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねこだまし",
				'zh-tw': "擊掌奇襲",
				th: "หลอกล่อ",
			},
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752959,
				tcgplayer: 566226,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [725],
};

export default card;
