import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
		'zh-tw': "鬃岩狼人",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "群れを 作らず １匹で 暮らす。 自分の 力を 引き出してくれる トレーナーの いうことしか 聞かない。",
		'zh-tw': "不集結成群，而是單獨生活。只會聽命於能夠引出自己力量的訓練家。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ローグファング" },
			damage: "80+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "自分のトラッシュにある「いちげき」のポケモンの枚数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560458,
				tcgplayer: 569174,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [745],
};

export default card;
