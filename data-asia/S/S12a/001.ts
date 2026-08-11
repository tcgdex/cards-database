import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "パラス",
		'zh-tw': "派拉斯",
		th: "พารัส",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。",
		'zh-tw': "控制蟲子的是一種叫做冬蟲夏草的蕈類。 蟲子的意志會被忽視。",
		th: "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すいとる",
				'zh-tw': "吸取",
				th: "ดูดซับ",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687478,
				tcgplayer: 571539,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577435,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [46],
};

export default card;
