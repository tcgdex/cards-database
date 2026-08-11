import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホーホー"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	dexId: [163],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "さんどづき"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card