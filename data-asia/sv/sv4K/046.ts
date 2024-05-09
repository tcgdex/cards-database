import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "クロバット"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [169],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "４枚の 羽を 自在に 操り 羽ばたく。 狭い 洞窟でも スピードを 落とさず 飛びまわれる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マッドエコー"
		},

		damage: 50,

		effect: {
			ja: "自分はグッズまたはサポートのどちらかを選ぶ。次の相手の番、相手は選ばれたトレーナーズを手札から出して使えない。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "カッターウインド"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0
}

export default card