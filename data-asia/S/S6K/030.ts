import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴビット",
		'zh-tw': "泥偶小人",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "粘土から つくられた ポケモン。 何千年も 前の 主の 命令を 今も 守っている。",
		'zh-tw': "用黏土製成的寶可夢。即使現在也一直遵循著數千年前主人的命令。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "拍擊",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "パンチ",
				'zh-tw': "出拳",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560797,
				tcgplayer: 569258,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [622],
};

export default card;
