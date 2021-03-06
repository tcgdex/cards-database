import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Burning Coat",
				fr: "Manteau brûlant",
			},
			effect: {
				en: "Whenever 1 of your opponent's Pokémon is Knocked Out by damage from Entei's attacks, discard the top 3 cards from your opponent's deck.",
				fr: "Lorsqu'1 des Pokémon de votre adversaire est mis K.O par des dégâts infligés par des attaques d'Entei, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Blaze Roar",
				fr: "Flammes rugissantes",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, discard 2 Fire Energy attached to Entei.",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est pile, défaussez 2 cartes Énergie Fire attachées à Entei.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
