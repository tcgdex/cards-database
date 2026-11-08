import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムーランド",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "賢く 温厚で 勇敢。 レスキュー隊の 隊員たちの 頼れる 相棒だぞ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ほえたてる" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561725,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハーデリア",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [508],
};

export default card;
