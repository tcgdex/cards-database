import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "チルット"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真綿のような 翼の 手入れは 絶対に 欠かさない。 汚れると 水浴びをして きれいに 洗う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふわふわガード"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はばたく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card