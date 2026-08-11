import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハブネーク",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'ja-jp': "猛毒が 染み出している 鋭い 切れ味の 尻尾で 素早い ザングースに 立ち向かう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ポイズンアップ" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンは、どくでのせるダメカンの数が1個多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくのキバ" },
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560071,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [336],
};

export default card;
