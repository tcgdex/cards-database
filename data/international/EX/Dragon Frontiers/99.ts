import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Tyranitar ex δ",
		'fr-fr': "Tyranocif ex δ",
		'de-de': "Despotar ex"
	},

	suffix: "ex",
	illustrator: "Yusuke Shimada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electromark",
				'fr-fr': "Électro-marque",
				'de-de': "Elektromarkierung"
			},
			effect: {
				'en-us': "Put a Shock-wave marker on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez un marqueur Électrochoc sur 1 des Pokémon de votre adversaire.",
				'de-de': "Lege eine Stromschlag-Marke auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Claws",
				'fr-fr': "Hyper griffes",
				'de-de': "Hyperklauen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 70 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué de Niveau 2, cette attaque inflige 70 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon Phase 2 ist, fügt dieser Angriff 70 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shock-wave",
				'fr-fr': "Électrochoc",
				'de-de': "Stromschlag"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any Shock-wave markers on it. That Pokémon is Knocked Out.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs Électrochoc. Ce Pokémon est mis K.O.",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem Stromschlag-Marken liegen. Dieses Pokémon ist jetzt kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 277304
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
