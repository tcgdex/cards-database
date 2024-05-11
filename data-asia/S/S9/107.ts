import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "エルフーンV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "おじゃまなわたげ"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "コットンガード"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card