import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リグレー",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "凄まじい サイコパワーを 操る。 宇宙人 目撃情報の 多くは リグレーの 見間違いだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイケこうせん" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556998,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [605],
};

export default card;
