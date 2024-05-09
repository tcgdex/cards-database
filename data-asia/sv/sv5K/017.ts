import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "サメハダー"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [319],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "獲物の 匂いを 嗅ぎとると お尻から 海水を 噴射して 時速１２０キロで 襲撃する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみすてる"
		},

		damage: 50,

		effect: {
			ja: "コインを3回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card