import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Déplacez 1 carte Énergie de base attachée à 1 de vos Pokémon sur un autre de vos Pokémon.",
		de: "Lege 1 Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277606,
		tcgplayer: 85257
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
