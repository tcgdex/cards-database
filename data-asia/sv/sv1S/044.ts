import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビアル"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [553],
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "強力な あごで 噛みつくと そのまま 思い切り 体を ひねり 獲物を 切断する。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ガブガブバイト"
		},

		damage: 50,

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "じしん"
		},

		damage: 180,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card