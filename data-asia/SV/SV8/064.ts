import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴマゾウ"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "見た目より ずっと 力持ち。 振りまわす 鼻に ぶつかると 腕の 骨が もっていかれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ずつき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card