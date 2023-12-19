import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Technical Machine 01",
		fr: "Machine Technique 01 de Team Magma",
		de: "Team Magma Technische Maschine"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Attachez cette carte à 1 de vos Pokémon dont le nom comporte Team Magma. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin du tour, défaussez Machine Technique 01 de Team Magma.",
		de: "Attach this card to 1 of your Pokémon that has Team Magma in its name. That Pokémon may use this card´s attack instead of its own. At the end of your turn, discard Team Magma Technical Machine 01."
	},

	attacks: [{
		name: {
			de: "Crushing Magma"
		},

		damage: 10,

		effect: {
			de: "Choose Energy card attached to the Defending Pokémon and put that card at the bottom of your opponent´s deck."
		},

		cost: ["Colorless"]
	}]
}

export default card
