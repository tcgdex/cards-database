import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
		'zh-tw': "傘電蜥",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "太陽発電の 仕組みを もつ。 発電を じゃま されると ストレスで 弱ってしまう。",
		'zh-tw': "擁有太陽能發電的結構。如果有人打擾牠發電，牠就會因心理壓力而衰弱。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
			},
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575585,
				tcgplayer: 569531,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [694],
};

export default card;
