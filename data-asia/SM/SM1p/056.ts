import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ドヒドイデGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とげキャノン" },
			damage: "30×",
			cost: ["Psychic"],
			effect: {
				ja: "コインを4回投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "げきヤバポイズン" },
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は10個になる。",
			},
		},
		{
			name: { ja: "ドシェルターGX" },
			damage: 150,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561584,
			},
		},
	],

	evolveFrom: {
		ja: "ヒドイデ",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [748],

	suffix: "GX",
};

export default card;
