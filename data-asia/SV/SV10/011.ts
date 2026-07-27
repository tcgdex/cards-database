import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "オリーニョ",
		'zh-tw': "奧利紐",
		'zh-cn': "奧利紐",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "フレッシュな 香りの 美味しい オイルを 分けてくれる。 古くから 人間と 共存してきた。",
		'zh-tw': "會分享自己香氣新鮮、 美味可口的油。自古以來 就與人類共存，直到現在。",
		'zh-cn': "會分享自己香氣新鮮、 美味可口的油。自古以來 就與人類共存，直到現在。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "えいようそ",
				'zh-tw': "營養素",
				'zh-cn': "營養素",
			},
			cost: ["Grass"],
			effect: {
				ja: "自分のポケモン1匹のHPを「40」回復する。",
				'zh-tw': "將自己的1隻寶可夢恢復「40」HP。",
				'zh-cn': "將自己的1隻寶可夢恢復「40」HP。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
				'zh-cn': "撞擊",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821842,
				tcgplayer: 628652,
			},
		},
	],

	evolveFrom: {
		ja: "ミニーブ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [929],
};

export default card;
