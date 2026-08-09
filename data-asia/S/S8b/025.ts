import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "羽と 尻尾を 素早く 動かし 前を 向いたまま 後ろへ 泳ぐこともできる ポケモン。",
		'zh-tw': "這種寶可夢可以藉著快速擺動翅膀和尾巴，在面向前方的情況下向後游動。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 40,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586540,
				tcgplayer: 571278,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578366,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [117],
};

export default card;
