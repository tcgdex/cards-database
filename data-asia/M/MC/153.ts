import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "オスが 子どもを 育てる。 子育て中は 背中の トゲの 毒素が 強く 濃くなるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "えんぐん" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "するどいひれ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863449,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [117],
};

export default card;
