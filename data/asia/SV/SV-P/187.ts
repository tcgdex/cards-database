import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カバルドン",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'ja-jp': "大きく 口を 開けて 自分の 強さを アピール。 大量の 砂を 巻き上げて 攻撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 60,
			cost: ["Fighting", "Fighting"],
		},
		{
			name: { ja: "おおすなあらし" },
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "ダメカンがのっているおたがいのベンチポケモン全員にも、それぞれ40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793383,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒポポタス",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [450],
};

export default card;
