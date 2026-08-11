import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Island Cave",
		fr: "Grotte island",
		de: "Island Cave*"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever any player attaches an Energy card from his or her hand to Water Pokémon, Fighting Pokémon, or Metal Pokémon, remove any Special Conditions from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Whenever any player attaches an Energy card from his or her hand to  Pokémon,  Pokémon, or  Pokémon, remove any Special Conditions from that Pokémon."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86290,
				cardmarket: 276163
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86290,
				cardmarket: 276163
			}
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871541,
				tcgplayer: 477533
			}
		},
	]
}

export default card
