import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ワンリキー",
		'zh-tw': "腕力",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "全身が 筋肉になっており 子どもほどの 大きさしかないのに 大人 １００人を 投げ飛ばせる。",
		'zh-tw': "全身都是肌肉，雖然體型只有小孩那麼大， 卻可以扔飛１００個大人。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "パンチ",
				'zh-tw': "出拳",
			},
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656342,
				tcgplayer: 570697,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577113,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [66],
};

export default card;
