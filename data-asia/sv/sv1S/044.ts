import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビアル",
		'zh-tw': "流氓鱷"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [553],
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "強力な あごで 噛みつくと そのまま 思い切り 体を ひねり 獲物を 切断する。",
		'zh-tw': "用強力的顎咬住後，狠狠地扭動身體， 將獵物切斷。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ガブガブバイト",
			'zh-tw': "大口啃咬"
		},

		damage: 50,

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			'zh-tw': "擲硬幣直到出現反面，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "じしん",
			'zh-tw': "地震"
		},

		damage: 180,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。 [在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card