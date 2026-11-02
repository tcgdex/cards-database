import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Magnetic Storm",
		fr: "Tempête Magnétique",
		de: "Magnet Sturm"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Any damage done by attacks from Psychic Pokémon and Fighting Pokémon (both yours and your opponent's) is not affected by Resistance.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Any damage done by attacks from  Pokémon and  Pokémon (both yours and your opponent's) is not affected by Resistance."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87088,
				cardmarket: 276165
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87088,
				cardmarket: 276165
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871861,
				tcgplayer: 477397
			}
		},
	]
}

export default card
