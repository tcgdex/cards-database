import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アマージョ"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [763],
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "気位が 高く 攻撃的だが ヘタの 冠に 触られると たちまち 大人しくなるという。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "じょおうのかかと"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、手札から出すポケモンに進化できない。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "スピニングキック"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card