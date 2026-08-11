import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'de-de': "Ariados"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sticky",
				'fr-fr': "Collant",
				'de-de': "Klebrig"
			},
			effect: {
				'en-us': "The Retreat Cost for each player's Pokémon (excluding Ariados) is Colorless more.",
				'fr-fr': "Le Coût de retraite des Pokémon de chaque joueur (Migalos exclu) est de Colorless de plus.",
				'de-de': "Die Rückzugskosten aller Pokémon (außer Ariados) sind um  erhöht."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Offensive Needle",
				'fr-fr': "Aiguille offensive",
				'de-de': "Nadelangriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It attaches silk to its prey and sets it free. Later, it tracks the silk to the prey and its friends.",
		'fr-fr': "Il attache un fil à sa proie avant de la libérer. Il s'en servira pour la retrouver, elle et ses amis."
	},

	thirdParty: {
		cardmarket: 277649,
		tcgplayer: 83617
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
