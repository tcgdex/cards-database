import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンド"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地面を 掘って 巣穴を つくる。 地中の 硬い 岩も 鋭い ツメで 砕いて 掘り進むぞ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すなでかくす"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるトレーナーズは、相手のグッズまたはサポートの効果で、山札にもどせない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっかく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card