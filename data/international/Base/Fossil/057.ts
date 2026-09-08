import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'de-de': "Zubat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
				'de-de': "Blutsauger"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Zubat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Zubat has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez de Nosferapti un nombre de marqueurs de dégâts égal au nombre de dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance.) Si le nombre de marqueurs sur Nosferapti est inférieur à ce résultat, retirez-les tous.",
				'de-de': "Entferne von Zubat Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Zubat weniger weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 10,

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
		'en-us': "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
		'fr-fr': "Se déplace en colonies dans les endroits sombres. Il se déplace grâce aux ultrasons."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273918,
				tcgplayer: 44459
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273918,
				tcgplayer: 44459
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
