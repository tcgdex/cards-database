import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミュウツーGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フルバースト" },
			damage: "30×",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数x30ダメージ。",
			},
		},
		{
			name: { ja: "ちょうきゅうしゅう" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "サイコブレイクGX" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560069,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [150],

	suffix: "GX",
};

export default card;
