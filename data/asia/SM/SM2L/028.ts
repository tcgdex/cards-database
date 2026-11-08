import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メテノ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "大気中の チリを 喰っている。 喰った チリの 成分に よって コアの 色合いが 決まる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スピードスター" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "コスモプロージョン" },
			damage: 190,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				'ja-jp': "このポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561432,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [774],
};

export default card;
