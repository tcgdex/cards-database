import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スピアー",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "両手と お尻にある ３本の 毒針で 相手を 刺して 刺して 刺しまくって 攻撃する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "みちづればり" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "このワザは、このポケモンにダメカンがのっているときにしか使えない。おたがいのバトルポケモンをきぜつさせる。",
			},
		},
		{
			name: { ja: "とつげき" },
			damage: 90,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558283,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コクーン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [15],
};

export default card;
