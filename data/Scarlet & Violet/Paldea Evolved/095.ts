import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Bacabouh",
		en: "Sandygast",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Murmure",
			en: "Mumble",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Tir de Boue",
			en: "Mud Shot",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card