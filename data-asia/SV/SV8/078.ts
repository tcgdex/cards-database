import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドーミラー"
	},

	illustrator: "Nabatame Kazutaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "古い お墓から みつかる。 背中の 模様には 神秘的な 力が 宿っていると いわれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "シールドアタック"
		},

		damage: "20＋",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card