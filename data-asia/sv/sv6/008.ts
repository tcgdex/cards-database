import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "サルノリ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tomomi Ozaki",
	dexId: [810],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "けとばす"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "えだづき"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
