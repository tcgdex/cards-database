import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		de: "Digdri"
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
		en: "Diglett",
		fr: "Dynavolt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Veil",
				fr: "Voile ensablant",
				de: "Sandvorhang"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				fr: "Prévenez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
				de: "Verhindere allen Schaden, der Pokémon auf deiner Bank durch gegnerische Angriffe zugefügt wird."
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
				en: "Dig Under",
				fr: "Terrassement",
				de: "Schaufel unter"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts ne sont pas affectés par la Faiblesse et la Résistance.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des Verteidigenden Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Risikotackle"
			},
			effect: {
				en: "Dugtrio does 10 damage to itself.",
				fr: "Triopikeur s'inflige 10 dégâts.",
				de: "Digdri fügt sich selbst 10 Schadenspunkte zu."
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
