import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Good Rod",
		fr: "Bonne canne",
		de: "Gute Angel"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire, puis placez-le sur le dessus de votre deck. Si c’est pile, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
		en: "Flip a coin. If heads, search your discard pile for a Pokémon, show it to your opponent, and put it on top of your deck. If tails, search your discard pile for a Trainer card, show it to your opponent, and put it on top of your deck.",
		de: "Wirf eine Münze. Durchsuche bei \"Kopf\" deinen Ablagestapel nach 1 Pokémon-Karte, zeige sie deinem Gegner und lege sie oben auf dein Deck. Durchsuche bei \"Zahl\" deinen Ablagestapel nach 1 Trainerkarte, zeige sie deinem Gegner und lege sie oben auf dein Deck."
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
		cardmarket: 279232
	}
}

export default card
