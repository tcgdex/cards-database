import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Reactive Aroma",
				'fr-fr': "Arôme réactive",
				'de-de': "Reaktiver Duft"
			},
			effect: {
				'en-us': "As long as Roselia has any React Energy cards attached to it, remove 1 damage counter from each of your Pokémon (excluding Pokémon-ex) that has any React Energy cards attached to it between turns. You can't use more than 1 Reactive Aroma Poké-Body each turn.",
				'fr-fr': "Tant que Roselia possède des cartes Énergie réaction, retirez 1 marqueur de dégât à chacun de vos Pokémon (Pokémon-ex exclus) possédant des cartes Énergie réaction, entre deux tours. Vous ne pouvez pas utiliser plus d'1 Poké-Body Arôme réactive par tour.",
				'de-de': "Solange mindestens eine Reaktions-Energiekarte an Roselia angelegt ist, entferne zwischen den Zügen 1 Schadensmarke von jedem deiner Pokémon (außer Pokémon-ex), an denen mindestens eine Reaktions-Energiekarte angelegt ist. Du kannst pro Zug nicht mehr als 1 Reaktiver Duft Poké-Body einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flick Poison",
				'fr-fr': "Pichenette de poison",
				'de-de': "Springendes Gift"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Poisoned.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen 1 Verteidigendes Pokémon aus. Dein Gegner entscheidet, welches Pokémon ausgetauscht wird. Das neue Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276919,
		tcgplayer: 88818
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
	]
}

export default card
