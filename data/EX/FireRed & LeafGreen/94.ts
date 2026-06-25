import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Mt. Moon",
		fr: "Mont Selenite",
		de: "Mondberg"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Any Pokémon (both yours and your opponent's) with maximum HP less than 70 can't use any Poké-Powers.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre Carte Stade est mise en jeu.",
		de: "Any Pokémon (both yours and your opponent's) with maximum HP less than 70 can't use any Poke-Power",
	},

	thirdParty: {
		cardmarket: 276270,
		tcgplayer: 87603
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
