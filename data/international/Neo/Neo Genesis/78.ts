import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'de-de': "Sonnkern"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 40,

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
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'de-de': "Wachstum"
			},
			effect: {
				'en-us': "Flip a coin. If heads, you may attach up to 2 Energy cards from your hand to Sunkern.",
				'fr-fr': "Lancez une pièce. Si c'est face, vous pouvez attacher jusqu'à 2 cartes Énergies  de votre main à Tournegrin.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' kannst du bis zu zwei -Energiekarten aus deiner Hand an Sonnkern anlegen."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Mega-sangsue",
				'de-de': "Megasauger"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Sunkern equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Sunkern has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez de Tournegrin un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondi à la dizaine la plus proche). Si Tournegrin a moins de dégâts que cela, retirez-les tous.",
				'de-de': "Entferne Schaden von Sonnkern in Höhe der Hälfte des Schadens, der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz verrechnet wurden) (auf die nächsten 10 aufgerundet). Falls Sonnkern weniger Schaden hat, entferne alle."
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
	retreat: 2,


	description: {
		'en-us': "It may drop out of the sky suddenly. If attacked by a Spearow, it violently shakes its leaves.",
		'fr-fr': "Il tombe parfois du ciel sans prévenir. Quand un Piafabec l'attaque, il secoue violemment ses feuilles."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274478,
				tcgplayer: 89617
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274478,
				tcgplayer: 89617
			}
		}
	]
}

export default card
