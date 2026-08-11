import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		548,
	],

	hp: 50,

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
				'en-us': "Aromatherapy",
				'fr-fr': "Aromathérapie",
				'es-es': "Aromaterapia",
				'it-it': "Aromaterapia",
				'pt-br': "Aromaterapia",
				'de-de': "Aromakur"
			},
			effect: {
				'en-us': "Heal 10 damage from each of your Pokémon.",
				'fr-fr': "Soignez 10 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
				'pt-br': "Cure 10 de danos de cada um dos seus Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
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

	description: {
		'en-us': "Since they prefer moist, nutrient-rich soil, the areas where Petilil live are known to be good for growing plants.",
	},

	thirdParty: {
		cardmarket: 288182,
		tcgplayer: 111510
	}
}

export default card
