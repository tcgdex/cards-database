import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ビードル",
		'zh-tw': "獨角蟲",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "毒針は とても 強力。 目立つ 体の 色は 相手に 警戒を させるためだ。",
		'zh-tw': "毒針非常厲害。鮮豔的體色是用來 警告對手的。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきさす",
				'zh-tw': "突刺",
			},
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586516,
				tcgplayer: 571254,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578354,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [13],
};

export default card;
