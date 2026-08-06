import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "サンド",
		'zh-tw': "穿山鼠",
		th: "แซนด์",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "どんなに 高い ところから 落ちても 体を 丸めれば バウンドできて 助かるのだ。",
		'zh-tw': "不管從多高的地方掉下， 只要把身體蜷成一團 就可以藉著反彈而得救。",
		th: "ไม่ว่าจะตกลงมาจากที่ที่สูงขนาดไหนก็ตาม หากมันม้วนตัวกลมแล้วกระดอนไปมาก็จะปลอดภัย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
				th: "กลิ้ง",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ダブルひっかき",
				'zh-tw': "雙重抓",
				th: "ข่วนทวีคูณ",
			},
			damage: "20×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
				th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767150,
				tcgplayer: 568047,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [27],
};

export default card;
