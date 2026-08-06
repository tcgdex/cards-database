import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "潮の 流れが 穏やかな 海に 棲む。 襲われると 真っ黒な 墨を吐いて その隙に 逃げだす。",
		'zh-tw': "棲息在海流平穩的海域。 被襲擊時會吐出漆黑的 墨汁，然後趁機逃走。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じっとする",
				'zh-tw': "紋絲不動",
			},
			cost: ["Water"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "ひれカッター",
				'zh-tw': "鰭快刀",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773759,
				tcgplayer: 566261,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [116],
};

export default card;
