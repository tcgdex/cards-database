import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
		de: "Schmetterhammer"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
		en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
		de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an ein gegnerisches Pokémon angelegte Energie auf den Ablagestapel deines Gegners. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288497,
		tcgplayer: 113718
	}
}

export default card
