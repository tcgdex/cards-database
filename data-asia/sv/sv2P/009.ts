import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アマージョ",
		'zh-tw': "甜冷美后"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [763],
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "気位が 高く 攻撃的だが ヘタの 冠に 触られると たちまち 大人しくなるという。",
		'zh-tw': "雖然性情高傲且攻擊性強，但據說只要摸摸牠果蒂的冠， 牠立刻會變得很溫順。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "じょおうのかかと",
			'zh-tw': "女王的腳跟"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、手札から出すポケモンに進化できない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法進化成從手牌使出的寶可夢。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "スピニングキック",
			'zh-tw': "旋轉踢"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card