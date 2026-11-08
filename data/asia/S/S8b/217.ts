import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バシャーモVMAX",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 60,
			cost: ["Fire"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ダイブレイズ" },
			damage: 130,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチの「れんげき」のポケモンを2匹まで選び、自分のトラッシュからエネルギーを1枚ずつつける。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587015,
				tcgplayer: 571469,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バシャーモV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [257],
};

export default card;
