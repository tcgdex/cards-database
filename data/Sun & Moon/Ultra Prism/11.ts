import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		es: "Cherrim",
		it: "Cherrim",
		pt: "Cherrim",
		de: "Kinoso"
	},
	illustrator: "MAHOU",
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
			type: "Ability",
			name: {
				en: "Weather Guard",
				fr: "Protection Météo",
				es: "Meteoroguardia",
				it: "Meteodifesa",
				pt: "Guarda do Clima",
				de: "Wetterschutz"
			},
			effect: {
				en: "Your Grass Pokémon have no Weakness.",
				fr: "Vos Pokémon Grass n’ont pas de Faiblesse.",
				es: "Tus Pokémon Grass no tienen Debilidad.",
				it: "I tuoi Pokémon Grass non hanno debolezza.",
				pt: "Seus Pokémon Grass não têm Fraqueza.",
				de: "Deine Grass-Pokémon haben keine Schwäche."
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
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
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

	retreat: 1,



}

export default card
