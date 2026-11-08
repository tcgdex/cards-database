import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nのゼクロム",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'ja-jp': "しっぽの 内部が モーターのように 回ると 何本もの 稲妻が 発生して 周囲を つらぬく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきさく" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ランページサンダー" },
			damage: 250,
			cost: ["Fire", "Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861453,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [644],
};

export default card;
