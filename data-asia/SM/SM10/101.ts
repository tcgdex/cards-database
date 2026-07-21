import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー&カイリキーGX",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リベンジ" },
			damage: "30+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ひゃくれつインパクト" },
			damage: 160,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "ごうけつのきわみGX" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "追加でエネルギーが1個ついているなら、次の相手の番、このポケモンがワザのダメージを受けてきぜつするとき、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557459,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [802, 68],

	suffix: "TAG TEAM-GX",
};

export default card;
