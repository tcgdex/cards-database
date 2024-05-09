import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモ"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1009],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "謎多き 凶暴な 生物。 古い 探検記に 記された 水の 怪物から 名付けられた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "オーロラゲイン"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "うねりさく"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにダメカンを9個までのせ、のせた数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card