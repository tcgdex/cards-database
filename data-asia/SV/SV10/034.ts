import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>咩利羊",
		'zh-cn': "<火箭隊的>咩利羊",
		ja: "ロケット団のメリープ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "身體裡只要儲存了靜電， 體毛就會膨脹到平時的２倍左右。 一旦觸摸就會被電得麻麻的。",
		'zh-cn': "身體裡只要儲存了靜電， 體毛就會膨脹到平時的２倍左右。 一旦觸摸就會被電得麻麻的。",
		ja: "体に 静電気が 溜まると 体毛が いつもの ２倍ほどに ふくらむ。 触ると 痺れる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "籌備",
			'zh-cn': "籌備",
			ja: "ちょうたつ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "小伏特",
			'zh-cn': "小伏特",
			ja: "プチボルト"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [179]
}

export default card