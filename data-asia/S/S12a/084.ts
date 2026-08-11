import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
		'zh-tw': "花岩怪",
		th: "มิคารูเกะ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂が 集まり ポケモンになったが 性悪の 魂が 混じってしまったらしい。",
		'zh-tw': "１０８個靈魂聚集在一起成為了寶可夢，但其中 似乎混進了壞心眼的靈魂。",
		th: "ดวงวิญญาณ 108 ดวงรวมตัวกันกลายเป็นโปเกมอนขึ้นมา แต่ดูเหมือนว่าจะมีดวงวิญญาณอันชั่วร้ายหลงปะปนอยู่ด้วย",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "のろいのことづけ",
				'zh-tw': "詛咒遺言",
				th: "ฝากฝังคำสาป",
			},
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
				'zh-tw': "當這隻寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
				th: "โปเกมอนนี้ เมื่อได้รับแดเมจจากท่าต่อสู้ของโปเกมอนฝ่ายตรงข้ามแล้ว[หมดสภาพ] เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ひとだまれんさ",
				'zh-tw': "孤魂連鎖",
				th: "ลูกโซ่วิญญาณ",
			},
			damage: "10+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分のトラッシュにある「ミカルゲ」の枚数×60ダメージ追加。",
				'zh-tw': "增加自己的棄牌區的「花岩怪」的張數×60點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนการ์ด [มิคารูเกะ] บนตำแหน่งทิ้งการ์ดฝ่ายเรา x60",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687646,
				tcgplayer: 571622,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577472,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [442],
};

export default card;
