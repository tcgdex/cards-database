import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'de-de': "Tangoloss"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [465],

	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'fr-fr': "Écrase",
				'de-de': "Zermahlen"
			},
			effect: {
				'en-us': "Does 20 damage times the number of Energy attached to Tangrowth.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à Bouldeneu.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Tangoloss angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plow Over",
				'fr-fr': "Labour",
				'de-de': "Umpflügen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, put 1 Energy card attached to the Defending Pokémon in the Lost Zone.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé. Si c’est pile, placez 1 carte Énergie attachée au Pokémon Défenseur dans la Zone Perdue.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt. Bei \"Zahl\" lege 1 an das Verteidigende Pokémon angelegte Energiekarte ins Nirgendwo."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 4,

	description: {
		'en-us': "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89754,
				cardmarket: 279677
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89754,
				cardmarket: 279677
			},
		},
	],

}

export default card
