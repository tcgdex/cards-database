import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "伽勒爾 踏冰人偶V",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "まわりの 環境に 合わせて 体の つくりを 変えていく 能力の 持ち主。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "しんかのきざし",
				'zh-tw': "驚嚇之手",
			},
			cost: ["Colorless"],
			effect: {
				ja: "「イーブイ」から進化するカードを、自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "けりつける",
				'zh-tw': "特製拐杖",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597318,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [133],
};

export default card;
