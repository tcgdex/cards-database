import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ"
	},
	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	description: {
		ja: "幼いうちにメスのカエンジシに狩りを教わるが成長すると群れを離れて独り立ちする。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ほのお"
		},
		damage: 30,
		cost: ["Fire", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [667]
}

export default card
