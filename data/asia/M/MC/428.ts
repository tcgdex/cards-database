import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーガポン いしずえのめんex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いしずえのかまえ" },
			effect: {
				'ja-jp': "このポケモンは、相手の特性を持つポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちやぶる" },
			damage: 140,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863730,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1017],

	suffix: "EX",
};

export default card;
