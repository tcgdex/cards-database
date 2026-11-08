import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエのピッピex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フェアリーゾーン" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手の場の[N]ポケモン全員の弱点は、すべて[P]タイプになる。［弱点は「×2」で計算する。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フルムーンロンド" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861303,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [35],

	suffix: "EX",
};

export default card;
