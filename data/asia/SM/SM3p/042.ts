import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラティオス",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "高い 知能を 持つ ポケモン。 腕を 折りたたんで 飛べば ジェット機を 追い越す スピードだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ブレイクスルー" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ラグーンフライト" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560200,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [381],
};

export default card;
