import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nのレシラム",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'ja-jp': "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パワーレイジ" },
			damage: "20×",
			cost: ["Fire", "Lightning"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×20ダメージ。",
			},
		},
		{
			name: { ja: "イノセントフレイム" },
			damage: 170,
			cost: ["Fire", "Fire", "Lightning", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863847,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [643],
};

export default card;
