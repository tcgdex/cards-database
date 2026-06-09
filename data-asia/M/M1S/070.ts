import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル"
	},
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		ja: "太陽発電の仕組みをもつ。発電をじゃまされるとストレスで弱ってしまう。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ダブルひっかき"
		},
		damage: "10×",
		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		},
		cost: ["Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [694]
}

export default card
