import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
	},

	illustrator: "UKUMO uiti",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "ふわふわの 体毛は 静電気が 溜まると ２倍に ふくらむ。 触ると 感電してしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんじは" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876926,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [179],
};

export default card;
