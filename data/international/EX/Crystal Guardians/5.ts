import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'de-de': "Digdri"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Dynavolt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Veil",
				'fr-fr': "Voile ensablant",
				'de-de': "Sandvorhang"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				'fr-fr': "Prévenez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
				'de-de': "Verhindere allen Schaden, der Pokémon auf deiner Bank durch gegnerische Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dig Under",
				'fr-fr': "Terrassement",
				'de-de': "Schaufel unter"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts ne sont pas affectés par la Faiblesse et la Résistance.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des Verteidigenden Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Dugtrio does 10 damage to itself.",
				'fr-fr': "Triopikeur s'inflige 10 dégâts.",
				'de-de': "Digdri fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277086,
		tcgplayer: 85001
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card
