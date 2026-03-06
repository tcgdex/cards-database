import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Tangrowth LV. X",
		de: "Tangoloss"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	
	hp: 130,

	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Growth",
				de: "Heilbewuchs"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 4 damage counters from 1 of your Pokémon. This power can't be used if Tangrowth is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" entferne 4 Schadensmarken von 1 deiner Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Tangoloss von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Big Growth",
				de: "Großes Wachstum"
			},
			effect: {
				en: "Search your discard pile for as many Grass Energy cards as you like and attach them to your Pokémon in any way you like.",
				de: "Durchsuche deinen Ablagestapel nach beliebig vielen -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an."
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
	retreat: 3,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
