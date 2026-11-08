import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イーブイ",
		'zh-tw': "噴火龍V",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "まわりの 環境に 合わせて 体の つくりを 変えていく 能力の 持ち主。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "しんかのきざし",
				'zh-tw': "利爪劈擊",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "「イーブイ」から進化するカードを、自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: {
				'ja-jp': "けりつける",
				'zh-tw': "火焰旋渦",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525105,
				tcgplayer: 597286,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [133],
};

export default card;
