import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シャンデラVMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅばくのかげろう" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手は手札から「ポケモンのどうぐ」を出してつけられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイポルターガイスト" },
			damage: "70×",
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "相手の手札を見て、その中にあるトレーナーズの枚数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576194,
				tcgplayer: 569617,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シャンデラV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [609],
};

export default card;
