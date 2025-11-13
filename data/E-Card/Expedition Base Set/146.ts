import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pokémon Reversal",
		fr: "Inversion de Pokémon",
		de: "Pokémon-Umkehrung"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 des Pokémon du Banc de votre adversaire. Lancez une pièce. Si c'est face, échangez ce Pokémon contre le Pokémon Défenseur.",
		de: "Wähle eines der Pokémon auf der Bank deines Gegners. Wirf eine Münze. Tausche bei 'Kopf' dieses Pokémon mit dem Verteidigenden Pokémon."
	},

	thirdParty: {
		cardmarket: 275021
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
