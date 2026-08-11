import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トルネロスVMAX",
		'zh-tw': "龍捲雲VMAX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "ブラストウインド",
				'zh-tw': "極巨風塵",
			},
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ダイフウジン" },
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場にスタジアムが出ているなら、120ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560474,
				tcgplayer: 569190,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "トルネロスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [641],
};

export default card;
