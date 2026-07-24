import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーGX",
	},

	illustrator: "",
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
				ja: "このポケモンについているエネルギーの数x30ダメージ。",
			},
		},
		{
			name: { ja: "ちょうきゅうしゅう" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "サイコブレイクGX" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560238,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [150],

	suffix: "GX",
};

export default card;
