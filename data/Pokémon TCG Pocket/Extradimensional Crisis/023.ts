import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable",
		fr: "Mélodelfe"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [36],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Clefairy"
	},

	description: {
		en: "A timid fairy Pokémon that is rarely seen, it will\nrun and hide the moment it senses people.",
		fr: "Ce Pokémon s'apparente à une petite fée qui n'apparaît que rarement devant les humains. Il court se cacher dès qu'il ressent une présence."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Moon Kick",
			fr: "Coup d'Pied Lunaire"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card