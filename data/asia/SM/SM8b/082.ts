import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソルガレオ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ライジングスター" },
			cost: ["Metal"],
			effect: {
				'ja-jp': "自分のトラッシュにある[鋼]エネルギーを、相手の場のポケモンの数ぶん、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "コロナインパクト" },
			damage: 160,
			cost: ["Metal", "Metal", "Metal", "Metal"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550896,
			},
		},
	],

	retreat: 3,
	rarity: "Rare Holo",
	dexId: [791],
};

export default card;
