import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'de-de': "Jugong",
		'it-it': "Dewgong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'it-it': "Seel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'de-de': "Aurorastrahl",
				'it-it': "Raggiaurora"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser Glace",
				'de-de': "Ice Beam",
				'it-it': "Geloraggio"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon difensore è Paralizzato."
			},
			damage: 30,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273720,
				tcgplayer: 42366
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107022
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107022
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
		'fr-fr': "Il emmagasine la chaleur dans son corps. Il peut nager dans l'eau glacée à plus de 8 nœuds.",
		'it-it': "Conserva energia termica nel suo corpo. Nuota ad una velocità costante di 8 nodi anche in acque estremamente fredde. LIV 42 N.87"
	}
}

export default card
