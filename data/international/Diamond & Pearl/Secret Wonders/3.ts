import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'de-de': "Glurak"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fury Blaze",
				'fr-fr': "Flammes frénétiques",
				'de-de': "Loderfurie"
			},
			effect: {
				'en-us': "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Si votre adversaire possède moins de 3 cartes Récompense, chacune des attaques de Dracaufeu inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance.)",
				'de-de': "Wenn dein Gegner 3 oder weniger Preise übrig hat, fügt jeder Angriff von Glurak dem Aktiven Pokémon 50 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Blast Burn",
				'fr-fr': "Rafale feu",
				'de-de': "Lohekanonade"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez 2 cartes Énergie attachées à Dracaufeu. Si c'est pile, défaussez 4 cartes Énergie attachées à Dracaufeu. (Si vous ne pouvez pas, cette attaque est sans effet).",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 2 an Glurak angelegte Energiekarten auf deinen Ablagestapel. Bei \"Zahl\" lege 4 an Glurak angelegte Energiekarten auf deinen Ablagestapel. (Wenn du dies nicht tun kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
	},

	thirdParty: {
		cardmarket: 277756,
		tcgplayer: 84189
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
