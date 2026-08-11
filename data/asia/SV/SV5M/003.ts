import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タネボー",
		'zh-tw': "橡實果",
		'th-th': "ทาเนโบ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "じっと 動かずに いると 木の実と そっくり。 ついばみに やって来た ポケモンを 驚かせて 遊ぶ。",
		'zh-tw': "在牠一動也不動的時候，看起來和樹果一模一樣， 以嚇唬來啄食自己的寶可夢為樂。",
		'th-th': "หากอยู่นิ่ง ๆ ไม่เคลื่อนไหวจะเหมือนผลไม้มาก จะคอยแกล้งให้โปเกมอนที่เข้ามาจิกตกใจเล่น",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "こうちょく",
				'zh-tw': "硬化",
				'th-th': "แข็งเกร็ง",
			},
			cost: ["Grass"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			},
		},
		{
			name: {
				'ja-jp': "ぶらさがる",
				'zh-tw': "垂吊",
				'th-th': "ห้อยโตงเตง",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752884,
				tcgplayer: 566154,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [273],
};

export default card;
