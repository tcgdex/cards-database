import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "パラス",
		th: "พารัส",
		'zh-tw': "派拉斯",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。",
		th: "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
		'zh-tw': "控制蟲子的是一種叫做冬蟲夏草的蕈類。蟲子的意志會被忽視。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すいとる",
				th: "ดูดซับ",
				'zh-tw': "吸取",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656180,
				tcgplayer: 570664,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577090,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [46],
};

export default card;
