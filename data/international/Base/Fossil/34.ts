import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'de-de': "Golbat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
				'de-de': "Blutsauger"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Golbat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Golbat has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez de Nosferalto un nombre de marqueurs de dégâts égal au nombre de dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance.) Si le nombre de marqueurs sur Nosferalto est inférieur à ce résultat, retirez-les tous.",
				'de-de': "Entferne von Golbat Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Golbat weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
		'fr-fr': "Une fois son adversaire mordu, il absorbera son énergie même s'il devient trop gros pour voler."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273895,
				tcgplayer: 44436
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273895,
				tcgplayer: 44436
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
