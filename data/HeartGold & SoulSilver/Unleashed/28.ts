import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		de: "Kinoso"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sunny Heal",
				fr: "Guérison solaire",
				de: "Sonnenheilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from your Active Pokémon. This power can’t be used if Cherrim is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât de votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Ceriflor est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von deinem Aktiven Pokémon entfernen. Diese Poké-Power kann nicht benutzt werden, wenn Kinoso von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon graine",
				de: "Samenbomben"
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
		en: "During times of strong sunlight, its bud blooms, its petals open fully, and it becomes very active."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279184,
		tcgplayer: 84257
	}
}

export default card
