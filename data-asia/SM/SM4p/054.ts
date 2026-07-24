import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "全身が 岩で できている。 戦いで 体が 欠けても 岩を くっつけて 治してしまう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いわやまのうなり" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「レジスチル」が使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハードスイング" },
			damage: 110,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560087,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [377],
};

export default card;
