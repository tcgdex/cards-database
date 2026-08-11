import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フラベベ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 30,
	types: ["Fairy"],

	description: {
		'ja-jp': "気に入った 花を 見つけると 一生 その花と 暮らす。 風に 乗って 気ままに 漂う。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬけがけしんか" },
			effect: {
				'ja-jp': "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559602,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [669],
};

export default card;
