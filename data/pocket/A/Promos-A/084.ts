import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tapu Koko ex",
		'es-es': "Tapu Koko ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [785],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Plasma Hurricane",
			'es-es': "Huracán Plasma"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			'es-es': "Une 1 Energía {L} de tu área de Energía a este Pokémon."
		}
	},
	{
		name: {
			'en-us': "Mach Bolt",
			'es-es': "Rayo Mach"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card