import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "硬い 木の実を 使い 戦う。 そのテクニックは 代々の ボスから グループの 仲間に 受け継がれる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワースクラム" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分の「ナゲツケサル」が使うワザの、相手のバトル場の進化ポケモンへのダメージは「+30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いわとばし" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559853,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [766],
};

export default card;
