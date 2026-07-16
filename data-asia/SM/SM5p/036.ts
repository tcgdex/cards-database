import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ネクロズマ たそがれのたてがみ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "ソルガレオの光を 喰らい続ける 姿。 敵に とびかかり 背中と 四肢のツメで 相手を 切り裂く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たそがれのだんがん" },
			cost: ["Metal"],
			effect: {
				ja: "相手の「ポケモンGX・EX」1匹に、60ダメージ。このワザのダメージは、弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "ラスティネイル" },
			damage: "100+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559786,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [800],
};

export default card;
