import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クイタラン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "尻尾から 取りこんだ 空気を 炎に変えて ベロのように 使い アイアントを 溶かして 食べるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "くろこげブレス" },
			damage: 120,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンがやけどでないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550566,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [631],
};

export default card;
