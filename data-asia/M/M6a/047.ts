import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ピカピカパレード" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "10まんボルト" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908225,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [25],

	suffix: "EX",
};

export default card;
