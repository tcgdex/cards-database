import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Space Center",
		fr: "Centre spatial",
		de: "Space Center*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Ignore Poké-Bodies for all Basic Pokémon in play (both yours and your opponent's) (excluding Pokémon-ex and Pokémon that has an owner in its name).",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Ignore Poke-Bodies for all Basic Pokémon in play (both yours and your opponent's) (excluding Pokémon-ex and Pokémon that has an owner in its name).",
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89434,
				cardmarket: 276494
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89434,
				cardmarket: 276494
			},
		},
		{
			type: "normal",
			stamp: ["10th-anniversary"],
			thirdParty: {
				tcgplayer: 286613,
			},
		},
	],

}

export default card
