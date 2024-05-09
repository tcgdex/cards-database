import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アノホラグサ"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [947],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "頭の 枝を 開いて 獲物を 飲みこむ。 生気を 存分に 吸い取ると 吐き出して 捨てるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いのちをすいとる"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かれきのろうごく"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、エネルギー2個ぶん多くなる。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card