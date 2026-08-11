import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'de-de': "Kinoso"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [421],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Sunny Heal",
				'fr-fr': "Guérison solaire",
				'de-de': "Sonnenheilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from your Active Pokémon. This power can't be used if Cherrim is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât de votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Ceriflor est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von deinem Aktiven Pokémon entfernen. Diese Poké-Power kann nicht benutzt werden, wenn Kinoso von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon graine",
				'de-de': "Samenbomben"
			},

			damage: 30,

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

	retreat: 1,

	description: {
		'en-us': "During times of strong sunlight, its bud blooms, its petals open fully, and it becomes very active."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84257,
				cardmarket: 279184
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84257,
				cardmarket: 279184
			}
		},
	],

}

export default card
