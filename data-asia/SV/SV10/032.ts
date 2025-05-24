import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浩大鯨ex",
		'zh-cn': "浩大鯨ex",
		ja: "ハルクジラex"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "融合為雪",
			'zh-cn': "融合為雪",
			ja: "ゆきにまぎれる"
		},

		effect: {
			'zh-tw': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。",
			'zh-cn': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。",
			ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "粉碎重壓",
			'zh-cn': "粉碎重壓",
			ja: "クラッシュプレス"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加140點傷害。",
			'zh-cn': "若希望，將場上的競技場卡丟棄。這個情況下，增加140點傷害。",
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、140ダメージ追加。"
		},

		damage: "140＋",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Double rare"
}

export default card