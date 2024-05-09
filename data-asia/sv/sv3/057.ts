import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ノズパス"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [299],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "強力な 磁力で 獲物を 引き寄せ 動かず 狩りを するが 天敵を 引き寄せることもある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てつあつめ"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card