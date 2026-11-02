import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリヤード",
		'zh-tw': "伽勒爾 魔牆人偶",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "足の 裏から 冷気を 出す。 凍らせた 床の 上で １日 タップダンスに 励んでいる。",
		'zh-tw': "會從腳底釋放出冷氣。一整天都會在自己凍住的地板上努力練習踢踏舞。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "拍擊",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "さぐりあてる",
				'zh-tw': "找到",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586542,
				tcgplayer: 571280,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578367,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [122],
};

export default card;
