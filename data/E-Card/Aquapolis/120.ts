import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Mikio Menjo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
		de: "Lege eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85253,
				cardmarket: 275196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85253,
				cardmarket: 275196
			}
		},
	]
}

export default card
