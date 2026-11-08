import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤングース",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "餌を 探し うろつき続ける。 日が 暮れるころには 疲れ果て 倒れ込むように その場で 眠る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さぐる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の手札を見る。",
			},
		},
		{
			name: { ja: "とっしん" },
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
				cardmarket: 559863,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [734],
};

export default card;
