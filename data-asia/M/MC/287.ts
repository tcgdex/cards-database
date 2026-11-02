import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのピッピex",
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
				ja: "このポケモンがいるかぎり、相手の場の[N]ポケモン全員の弱点は、すべて[P]タイプになる。［弱点は「×2」で計算する。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フルムーンロンド" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863589,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [35],

	suffix: "EX",
};

export default card;
