import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルマイン",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "少しの 刺激に 反応して 爆発する。 バクダンボールという あだ名で 怖がられている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スピードスター" },
			damage: 60,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560190,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ビリリダマ",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [101],
};

export default card;
