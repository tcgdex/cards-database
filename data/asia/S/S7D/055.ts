import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バイウールー",
		'zh-tw': "毛毛角羊",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。",
		'zh-tw': "長得長長的角是為了向異性求愛而存在的。牠從不會把角當作武器。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "とびはねる",
				'zh-tw': "彈跳",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				'ja-jp': "ころがりタックル",
				'zh-tw': "滾動衝撞",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571644,
				tcgplayer: 569378,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ウールー",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [832],
};

export default card;
