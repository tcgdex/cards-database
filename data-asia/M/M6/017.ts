import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "マンタイン",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳いで スピードが のってくると 波の上に 飛びだし そのまま １００メートルも 滑空 する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なみをおこす" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
			},
		},
		{
			name: { ja: "バブルドレイン" },
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899890,
				tcgplayer: 709173,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [226],
};

export default card;
