import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルガルガンVMAX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "ハンティングクロー" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手の場の残りHPが「60」以下のポケモンを1匹選び、きぜつさせる。",
			},
		},
		{
			name: { ja: "ダイエッジ" },
			damage: 190,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572062,
				tcgplayer: 569403,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ルガルガンV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [745],
};

export default card;
