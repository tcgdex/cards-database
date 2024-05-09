import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ペロリーム"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "mingo",
	dexId: [685],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "体臭から 心と 体の 調子を 嗅ぎとる。 医療への 応用が 期待されている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ペロペロリン"
		},

		damage: "90×",

		effect: {
			ja: "コインを2回投げ、オモテの数×90ダメージ。すべてウラなら、相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card
