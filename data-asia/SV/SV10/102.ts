import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "パールル",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "パールルの 真珠は とても 貴重。 シェルダーの 真珠の １０倍以上 価値が あるとも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シェルプレス" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821934,
				tcgplayer: 629043,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [366],
};

export default card;
