import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tool Drop",
				'fr-fr': "Chute d’Outils",
				'es-es': "Machaque Herramientas",
				'it-it': "Oggettamico",
				'pt-br': "Queda de Ferramenta",
				'de-de': "Ausrüstungssturz"
			},
			effect: {
				'en-us': "This attack does 30 damage for each Pokémon Tool card attached to all Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada carta de Herramienta Pokémon unida a todos los Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata a ciascun Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada carta de Ferramenta Pokémon ligada a todos os Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an alle Pokémon angelegten Pokémon-Ausrüstungen zu."
			},
			damage: "30×",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
	},

	thirdParty: {
		cardmarket: 369037,
		tcgplayer: 183892
	}
}

export default card
