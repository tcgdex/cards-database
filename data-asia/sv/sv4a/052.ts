import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セゴール"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [997],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "まわりの 空気を 凍らせて 氷のマスクで 顔を 守り 背びれを 氷の剣に 変える。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "するどいひれ"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "フロストスマッシュ"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card