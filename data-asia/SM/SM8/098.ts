import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げんえいのかぜ" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キュアストリーム" },
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ブライニクルGX" },
			damage: 150,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558737,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [245],

	suffix: "GX",
};

export default card;
