import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		de: "Lege 1 Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278382,
		tcgplayer: 85258
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
