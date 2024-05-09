import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウツー"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	dexId: [150],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子を 組み替えて 生み出された。ポケモンで 一番 凶暴な 心を 持つという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "リフレクトバリア"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコストライク"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card