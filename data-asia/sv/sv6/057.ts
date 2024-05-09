import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "サンド"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tetsu Kayama",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "どんなに 高い ところから 落ちても 体を 丸めれば バウンドできて 助かるのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ころがる"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ダブルひっかき"
		},

		damage: "20×",

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
