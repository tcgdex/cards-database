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
		en: "Choose 1 of your opponent's Benched Pokémon. Flip a coin. If heads, switch that Pokémon with the Defending Pokémon.",
		fr: "Choisissez 1 des Pokémon du Banc de votre adversaire. Lancez une pièce. Si c'est face, échangez ce Pokémon contre le Pokémon Défenseur.",
		de: "Wähle eines der Pokémon auf der Bank deines Gegners. Wirf eine Münze. Tausche bei 'Kopf' dieses Pokémon mit dem Verteidigenden Pokémon."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275021,
				tcgplayer: 88238,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275021,
				tcgplayer: 88238,
			},
		},
	],
}

export default card
