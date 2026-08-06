import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
		'zh-tw': "炎帝",
		th: "เอ็นเต",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。",
		th: "ว่ากันว่าถ้าเอ็นเตคำราม ภูเขาไฟแห่งใดแห่งหนึ่งในโลกจะปะทุ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ヒートダッシュ",
				'zh-tw': "高溫衝刺",
				th: "ฮีทแดช",
			},
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "のぞむなら、自分の手札から[炎]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "若希望，從自己的手牌選擇1張【火】能量卡，附於這隻寶可夢身上。",
				th: "หากต้องการ เลือกการ์ดพลังงาน [ไฟ] 1 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนนี้",
			},
		},
		{
			name: {
				ja: "ほのおのキバ",
				'zh-tw': "火焰牙",
				th: "เขี้ยวไฟ",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ไหม้]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533267,
				tcgplayer: 568957,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [244],
};

export default card;
