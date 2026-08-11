import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハリーセン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "全身の 毒針を 飛ばすため １０リットルの 水を 一気に 飲みこみ 体を ふくらませる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくばり" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ショックばり" },
			damage: "20+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが特殊状態なら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560180,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [211],
};

export default card;
