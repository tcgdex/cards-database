import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが 良くなり 美しくなる。 抱きしめると ほんのり 温かい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かえん"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "あやしいひかり"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card