import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'de-de': "Kinoso"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
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
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sunny Day",
				'fr-fr': "Zénith",
				'de-de': "Sonnentag"
			},
			effect: {
				'en-us': "Each of your Grass Pokémon and Fire Pokémon's attacks does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Chacune des attaques de vos Pokémon Grass et Fire inflige 10 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance.",
				'de-de': "Alle Angriffe deiner - und -Pokémon fügen den Verteidigenden Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Salty-sweet Pollen",
				'fr-fr': "Pollen sucré-salé",
				'de-de': "Salzig-süße Pollen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from 1 of your Pokémon.",
				'fr-fr': "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarstrahl"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278312,
		tcgplayer: 84252
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
