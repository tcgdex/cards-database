import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vine Invite",
				'fr-fr': "Plante invitante",
				'de-de': "Einladende Ranke"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
				'de-de': "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Grass Knot",
				'fr-fr': "Noeud Herbe",
				'de-de': "Strauchler"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite).",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede -Energie in den Rückzugskosten des Verteidigenden Pokémon zu (nachdem Effekte auf die Rückzugskosten verrechnet wurden)."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is shrouded by blue vines. No one has seen the face hidden behind this growth of vines.",
	},

	thirdParty: {
		cardmarket: 277989,
		tcgplayer: 89744
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
