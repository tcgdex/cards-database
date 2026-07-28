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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon that does not have Team Aqua in its name pays Colorless more to retreat.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Each Pokémon that does not have Team Aqua in its name pays  more to retreat."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275855,
				tcgplayer: 89771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275855,
				tcgplayer: 89771
			}
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871557,
				tcgplayer: 477593
			}
		}
	],

	retreat: 0
}

export default card
