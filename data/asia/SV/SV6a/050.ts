import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "伊布",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
		'zh-tw': "有著不規則的基因。 石頭散發出的放射線， 會使牠的身體發生突變。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "カラフルキャッチ",
				'zh-tw': "鮮豔捕捉",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773799,
				tcgplayer: 566301,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [133],
};

export default card;
