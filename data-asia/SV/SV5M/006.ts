import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
		'zh-tw': "蘑蘑菇",
		th: "คิโนโคโค",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "危険を 感じると 頭の てっぺんから 毒の 胞子を ばらまき 身を 守る ポケモン。",
		'zh-tw': "一察覺到危險，就會從頭頂散播出毒孢子 來保護自身安全的寶可夢。",
		th: "โปเกมอนที่พอรู้สึกได้ถึงอันตราย จะปล่อยสปอร์พิษออกมาจากบนหัวเพื่อปกป้องตัวเอง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "にどずつき",
				'zh-tw': "二連頭錘",
				th: "พุ่งหัวชนสองครั้ง",
			},
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
				th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			},
		},
		{
			name: {
				ja: "タネばくだん",
				'zh-tw': "種子炸彈",
				th: "ระเบิดเมล็ดพืช",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752887,
				tcgplayer: 566157,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [285],
};

export default card;
