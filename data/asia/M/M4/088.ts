import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンリュウ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'ja-jp': "尻尾の 先が 光り輝く。 光は はるか 遠くまで 届き 迷った者の 道標となる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シンクロパルス" },
			effect: {
				'ja-jp': "自分の手札と相手の手札が同じ枚数なら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+80」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フラッシュボルト" },
			damage: 140,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「フラッシュボルト」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877317,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モココ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [181],
};

export default card;
