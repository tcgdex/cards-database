import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex",
		fr: "Tokorico-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Plasma Hurricane",
			fr: "Ouragan Plasma"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon."
		}
	}, {
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant"
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
