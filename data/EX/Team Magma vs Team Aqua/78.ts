import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Hideout",
		fr: "Cachette de Team Aqua",
		de: "Team Aquas Versteck"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nChaque Pokémon dont le nom ne comporte pas Team Aqua doit payer un  supplémentaire pour battre en retraite.",
		de: "Each Pokémon that does not have Team Aqua in its name pays  more to retreat."
	},

	thirdParty: {
		cardmarket: 276055,
		tcgplayer: 89771
	}
}

export default card
