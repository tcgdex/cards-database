import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463129,
				tcgplayer: 597263,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [568],
};

export default card;
