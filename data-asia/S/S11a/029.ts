import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブカス",
		'zh-tw': "愛心魚",
	},

	illustrator: "Miki Tanaka",
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
				ja: "フィーリングドロー",
				'zh-tw': "情緒抽出",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を5枚引く。",
				'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出5張卡。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
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
				cardmarket: 673026,
				tcgplayer: 570792,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570880,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [370],
};

export default card;
