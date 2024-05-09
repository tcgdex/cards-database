import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "エイパム"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Mugi Hamada",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "手よりも 自由自在に 動く 尻尾を 巧みに 操りながら 高い 木の上で 暮らしている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぶらさがる"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "やんちゃげり"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
