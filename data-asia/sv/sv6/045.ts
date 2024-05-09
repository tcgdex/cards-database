import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ピッピ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Sanosuke Sakuma",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "満月の 晩に 集まって 仲間と ダンス。 その周囲は 異常な 磁場に 包まれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ムーンキック"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card
