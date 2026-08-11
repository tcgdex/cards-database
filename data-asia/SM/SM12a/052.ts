import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツー&ミュウGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パーフェクション" },
			effect: {
				ja: "このポケモンは、自分のベンチまたはトラッシュにある「ポケモンGX・EX」が持っているワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "Attack 1" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "追加でエネルギーが1個ついているなら、自分のポケモン全員のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 543796,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [150, 151],

	suffix: "TAG TEAM-GX",
};

export default card;
