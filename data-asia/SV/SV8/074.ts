import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "タギングル"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [945],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "タギングルが 描く 模様は 個体によって 異なり 生涯 同じ 模様を 描き続ける。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いたずらペイント"
		},

		effect: {
			ja: "相手のトラッシュからエネルギーを3枚まで選び、相手のポケモンに好きなようにつける。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エナジーグラフィティ"
		},

		damage: "40×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×40ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card