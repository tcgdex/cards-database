import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ピジョン"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [17],
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はばたく"
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

	retreat: 0,
	rarity: "None"
}

export default card