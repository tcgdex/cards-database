import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Energy Charge",
		fr: "Recharge de puissance",
		de: "Energieaufladung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Flip a coin. If heads, search your discard pile for 2 Energy cards (1 if there is only 1), show them to your opponent, and shuffle them into your deck.",
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre pile de défausse 2 cartes Énergie (ou 1 s'il n'y en a qu'1), montrez-les à votre adversaire et mélangez-les à votre deck.",
		de: "Wirf eine Münze. Mische bei 'Kopf' 2 Energiekarten aus deinem Ablagestapel in dein Deck (1, wenn du nur 1 hast)."
	},

	thirdParty: {
		tcgplayer: 85211,
		cardmarket: 276489
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
