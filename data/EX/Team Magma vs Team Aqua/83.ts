import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Hideout",
		fr: "Cachette de Team Magma",
		de: "Team Magmas Versteck"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever any player plays a Basic Pokémon that doesn't have Team Magma in its name from his or her hand, that player puts 1 damage counter on that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Whenever any player plays a basic Pokémon that doesn't have Team Magma in its name from his or her hand, that player puts 1 damage counter on that Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275860,
				tcgplayer: 89815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275860,
				tcgplayer: 89815
			}
		},
	],

	retreat: 0
}

export default card
