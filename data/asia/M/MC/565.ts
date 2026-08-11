import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イーブイ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ブーストしんか" },
			effect: {
				'ja-jp': "このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863867,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [133],
};

export default card;
