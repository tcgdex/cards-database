import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Lure Poison",
				'fr-fr': "Appât Vénéneux"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Empoisonné."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spit Squall",
				'fr-fr': "Rafale de Crachats"
			},
			effect: {
				'en-us': "Your opponent puts the Defending Pokémon and all cards attached to it into his or her hand.",
				'fr-fr': "Votre adversaire reprend le Pokémon Défenseur et toutes les cartes qui lui sont attachées dans sa main."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It binds itself to trees on marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
	},

	thirdParty: {
		cardmarket: 280333,
		tcgplayer: 84106
	}
}

export default card
