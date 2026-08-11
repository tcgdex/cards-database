import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンバドロ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マッドストック" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分のベンチポケモン全員に、トラッシュから「基本[F]エネルギー」を1枚ずつつける。",
			},
		},
		{
			name: { ja: "10まんばりき" },
			damage: 140,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752803,
				tcgplayer: 568372,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドロバンコ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [750],
};

export default card;
