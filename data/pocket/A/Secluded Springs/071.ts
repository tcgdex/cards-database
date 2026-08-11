import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Morty",
		fr: "Mortimer"
	},

	illustrator: "Teeziro",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "For each of your {P} Pokémon in play, look at that many cards from the top of your opponent's deck and put them back in any order.",
		fr: "Pour chacun de vos Pokémon {P} en jeu, regardez une carte du dessus du deck de votre adversaire, puis replacez les cartes regardées dans l'ordre de votre choix."
	},

	trainerType: "Supporter"
}

export default card