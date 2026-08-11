import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビリジオンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルドロー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "センシングブレード" },
			damage: "50+",
			cost: ["Grass", "Grass"],
			effect: {
				'ja-jp': "この番、手札からサポートを出して使っていたなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "ブリーズアウェイGX" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の場のポケモンを好きなだけ選び、選んだポケモンと、ついているすべてのカードを、手札にもどす。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558949,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [640],

	suffix: "GX",
};

export default card;
