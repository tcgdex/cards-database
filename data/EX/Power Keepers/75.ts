import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		de: "Lege 1 Basis-Energiekarte, die an einem deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	thirdParty: {
		cardmarket: 277381,
		tcgplayer: 85256
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

