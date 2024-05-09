import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ゴリランダー"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "toriyufu",
	dexId: [812],
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "特別な 切り株の パワーを ドラミングで コントロール。 根っこを 操って 戦う。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ドラムアタック"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーとにげるためのエネルギーが、それぞれエネルギー1個ぶん多くなる。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "ウッドハンマー"
		},

		damage: 180,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card
