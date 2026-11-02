import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラV",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ポルターガイスト" },
			damage: "40×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576180,
				tcgplayer: 569603,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [609],
};

export default card;
