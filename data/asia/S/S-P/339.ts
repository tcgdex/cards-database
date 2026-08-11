import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゲッコウガ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'ja-jp': "水を 圧縮して 手裏剣を 作り出す。 高速回転させて 飛ばすと 金属も 真っ二つ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "れんけいしゅりけん" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン3匹にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681795,
				tcgplayer: 597504,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゲコガシラ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [658],
};

export default card;
