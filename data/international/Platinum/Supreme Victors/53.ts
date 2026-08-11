import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'de-de': "Venuflibis"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet lianes",
				'de-de': "Rankenhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Swallow",
				'fr-fr': "Avale",
				'de-de': "Verschlucken"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove from Carnivine the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez à Vortente autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" entferne Schadensmarken von Venuflibis entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 30,

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
	retreat: 2,

	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84103,
				cardmarket: 278744
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278744,
				tcgplayer: 84103
			}
		},
	],

}

export default card
