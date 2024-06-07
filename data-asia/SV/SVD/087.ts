import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "普隆隆姆"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "在增加到了８個的汽缸裡引爆混有毒素和岩石成分的 氣體來製造能量。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "轟鳴引擎"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張能量卡丟棄，則可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "擊飛"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card