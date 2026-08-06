import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコV",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキボール" },
			damage: 40,
			cost: ["Lightning"],
		},
		{
			name: { ja: "スパイラルサンダー" },
			damage: "20+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538563,
				tcgplayer: 569021,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [785],
};

export default card;
