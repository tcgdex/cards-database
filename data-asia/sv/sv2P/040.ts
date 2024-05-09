import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザルex"
	},

	illustrator: "PLANETA Hiiragi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "アンガーグラッジ"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにダメカンを12個までのせ、のせた数×20ダメージ。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ちきゅうなげ"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card