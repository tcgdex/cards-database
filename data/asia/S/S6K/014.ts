import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブカス",
		'zh-tw': "愛心魚",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "暖かい 海の サンゴ礁が 棲み処。 サニーゴの枝の 間で 眠るのが 特に お気に入り。",
		'zh-tw': "溫暖海域的珊瑚礁是牠的棲息地。最喜歡在太陽珊瑚的枝條間睡覺。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "シンクロドロー",
				'zh-tw': "同步抽出",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、相手の手札の枚数ぶん、自分の山札を引く。",
				'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從自己的牌庫抽出與對手的手牌張數相同數量的卡。",
			},
		},
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560758,
				tcgplayer: 569242,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [370],
};

export default card;
