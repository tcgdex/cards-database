import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ガーディ",
		'zh-tw': "洗翠 卡蒂狗"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。",
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ぼうぎょしせい",
			'zh-tw': "防禦姿勢"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		},

		cost: []
	}, {
		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650995,
				tcgplayer: 569784,
				cardtrader: 234095,
			},
		},
	]
}

export default card