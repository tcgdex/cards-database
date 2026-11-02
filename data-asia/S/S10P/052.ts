import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロリンガ",
		'zh-tw': "大舌頭",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ネバネバした 唾液に 触れたまま 放っておくと ものすごい 痒みが はじまり とまらなくなるぞ。",
		'zh-tw': "沾到牠黏糊糊的唾液後如果放著不管，就會變得 奇癢無比，而且癢個不停。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "よだれ",
				'zh-tw': "口水",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651111,
				tcgplayer: 569895,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [108],
};

export default card;
