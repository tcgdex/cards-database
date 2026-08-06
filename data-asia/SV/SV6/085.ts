import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナスex",
		'zh-tw': "幸福蛋ex",
		th: "แฮปปีนาสex",
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ハッピースイッチ",
				'zh-tw': "幸福切換",
				th: "แฮปปี้สวิตช์",
			},
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
				'zh-tw': "在自己的回合時可使用1次。選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "おんがえし",
				'zh-tw': "報恩",
				th: "ทดแทนคุณ",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
				'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。",
				th: "หากต้องการ จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 6 ใบ",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767178,
				tcgplayer: 568075,
			},
		},
	],

	evolveFrom: {
		ja: "ラッキー",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [242],

	suffix: "EX",
};

export default card;
