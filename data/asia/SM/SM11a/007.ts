import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "メブキジカ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "季節によって 住処を 変える。 人々は メブキジカの ツノで 季節の 移り変わりを 感じる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きせつのめぐみ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびはねる" },
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556572,
			},
		},
	],

	evolveFrom: {
		ja: "シキジカ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [586],
};

export default card;
