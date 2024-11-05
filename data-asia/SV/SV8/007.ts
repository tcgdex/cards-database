import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とびだしヘッド"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card