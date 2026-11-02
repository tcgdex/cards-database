import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "潮の 流れが 穏やかな 海に 棲む。 襲われると 真っ黒な 墨を吐いて その隙に 逃げだす。",
		'zh-tw': "棲息在海流平穩的海域。被襲擊時會吐出漆黑的 墨汁，然後趁機逃走。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぎゃくふんしゃ",
				'zh-tw': "逆向噴射",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667897,
				tcgplayer: 569953,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [116],
};

export default card;
