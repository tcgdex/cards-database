import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	dexId: [177],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "羽が 育ちきって おらず 飛び跳ねるようにして 移動する。 いつも なにかを 見つめている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "さんれんづき"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card