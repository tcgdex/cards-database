import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "High Pressure System",
		fr: "Système à haute pression"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player pays Colorless less to retreat his or her Fire and Water Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nChaque joueur ne paye pas de  pour faire battre en retraite ses Pokémon  et ."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86077,
				cardmarket: 277458
			},
		},
	],

}

export default card
