import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl ex",
		fr: "Ptéra-ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [142],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Old Amber"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primeval Law",
			fr: "Ordre Primitif"
		},

		effect: {
			en: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon.",
			fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main sur le Pokémon Actif pour le faire évoluer."
		}
	}],

	attacks: [{
		name: {
			en: "Land Crush",
			fr: "Écras'Terre"
		},

		damage: 80,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card