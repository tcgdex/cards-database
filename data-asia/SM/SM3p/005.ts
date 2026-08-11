import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "湿った 場所を 好み 昼間は 森の 木陰で じっと している。 頭から 毒の 粉を 出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すいとる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560163,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [285],
};

export default card;
