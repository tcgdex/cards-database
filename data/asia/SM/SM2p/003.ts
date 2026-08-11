import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツボット",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "ジャングルの 奥地に ウツボット ばかり いる 地帯が あって 行ったら ２度と 帰ってこれない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "きけんなかふん" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "からめてすいとる" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「20」回復する。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561206,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ウツドン",
	},

	retreat: 2,
	rarity: "None",
	dexId: [71],
};

export default card;
