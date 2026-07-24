import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "死者の 魂が 古代の 剣に 宿って 生まれたらしい。 人に とりつき 命を 吸う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほりだしもの" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるグッズを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "つきさす" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557000,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [679],
};

export default card;
