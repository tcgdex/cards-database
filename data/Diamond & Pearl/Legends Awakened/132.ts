import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Energy Pickup",
		fr: "Collecte d'Énergie",
		de: "Energieaufsammlung"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon.",
		de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an 1 deiner Pokémon an."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278281,
		tcgplayer: 85215
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
