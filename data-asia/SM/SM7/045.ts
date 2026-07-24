import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "１日 １個だけ 木の実を 食べる。 空腹に 耐えることで 心が 研ぎ澄まされていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "がまん" },
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンがワザのダメージを受けてきぜつするとき、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
		{
			name: { ja: "キック" },
			damage: 30,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559006,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [307],
};

export default card;
