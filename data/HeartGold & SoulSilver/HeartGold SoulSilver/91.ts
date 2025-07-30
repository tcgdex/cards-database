import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Prenez une carte Énergie de base attachée à l’un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
		en: "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		de: "Lege 1 Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279063
	}
}

export default card
