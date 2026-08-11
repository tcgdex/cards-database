import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴマゾウ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "体は 小さいが 力持ち。 大人の 人を 軽々と 背中に 乗せて 歩いてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "こらえる" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンがワザのダメージを受けてきぜつするとき、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559183,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [231],
};

export default card;
