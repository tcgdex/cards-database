import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "コンパン",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "小さな 目が たくさん 集まって 大きな 目に なっている。 夜になると 明かりに 集まる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイケこうせん" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557360,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [48],
};

export default card;
