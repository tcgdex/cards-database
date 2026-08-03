import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズVMAX",
		'zh-tw': "向日種子",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "バブルポッド",
				'zh-tw': "種子炸彈",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[水]ポケモンを1枚選び、ベンチに出す。その後、自分のトラッシュから[水]エネルギーを3枚まで選び、出したポケモンにつける。",
			},
		},
		{
			name: { ja: "ダイゲキリュウ" },
			damage: "100+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571390,
				tcgplayer: 597385,
			},
		},
	],

	evolveFrom: {
		ja: "シャワーズV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [134],
};

export default card;
