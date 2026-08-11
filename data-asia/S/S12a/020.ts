import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキーV",
		'zh-tw': "爆香猿V",
		th: "บาอกกีV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はじけるちから",
				'zh-tw': "力量濺射",
				th: "พลังระเบิด",
			},
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "のぞむなら、自分の手札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。",
				'zh-tw': "若希望，從自己的手牌選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。",
				th: "หากต้องการ เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ",
			},
		},
		{
			name: {
				ja: "フレアファンブル",
				'zh-tw': "閃焰漏接",
				th: "จักกลิ้งบอลไฟ",
			},
			damage: "90+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687500,
				tcgplayer: 571558,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [514],
};

export default card;
