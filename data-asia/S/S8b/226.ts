import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコV-UNION",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ユニオンゲイン" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[L]エネルギーを2枚まで選び、このポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587024,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [877],
};

export default card;
