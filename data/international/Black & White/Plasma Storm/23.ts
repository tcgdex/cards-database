import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Luring Flame",
				'fr-fr': "Flamme Attrayante",
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Burned.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fiery Licks",
				'fr-fr': "Léchouilles Incendiaires",
			},
			effect: {
				'en-us': "Discard the top 4 cards of your deck. This attack does 50 damage times the number of Fire Energy cards you discarded.",
				'fr-fr': "Défaussez les 4 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Fire que vous avez défaussées.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.",
	},

	thirdParty: {
		cardmarket: 280763,
		tcgplayer: 86046
	}
}

export default card
