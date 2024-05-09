import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "温かい ６本の 尻尾は 体が 育つごとに 毛並みが 良くなり 美しく なっていく。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card