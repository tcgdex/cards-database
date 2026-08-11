import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団のグラエナ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "主人に 忠実な ポケモンだ。 どんなに 傷ついたと しても トレーナーを 守りぬくぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "てきいのキバ" },
			damage: "80+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「アクア団」のポケモンなら、40ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563739,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマ団のポチエナ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [262],
};

export default card;
