import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "フワンテ"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	dexId: [425],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "風船と 間違えて フワンテを 持っていた 小さな 子どもが 消えてしまうことが あるという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "バルーンボム"
		},

		damage: "30×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ。"
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

	retreat: 1
}

export default card