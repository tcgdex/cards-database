import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Mothim",
		'fr-fr': "Papilord",
		'de-de': "Moterpel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		414,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Disturbance Scales",
				'fr-fr': "Écailles tapageuses",
				'de-de': "Störschuppen"
			},
			effect: {
				'en-us': "Any damage done by attacks from your Pokémon to the Defending Pokémon isn't affected by Resistance.",
				'fr-fr': "Tous dégâts infligés par des attaques de vos Pokémon sur le Pokémon Défenseur ne sont pas affectés par la Résistance.",
				'de-de': "Schaden, der den Verteigigenden Pokémon durch deine Pokémon zugefügt wird, wird nicht durch Resistenz verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Get Help",
				'fr-fr': "À l'aide",
				'de-de': "Hilfe holen"
			},
			effect: {
				'en-us': "Does 30 damage times the number of different types of Wormadam on your Bench.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre de types différents de Cheniselle sur votre Banc.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl verschiedener Typen von Burmadame auf deiner Bank zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Quick Touch",
				'fr-fr': "Touche rapide",
				'de-de': "Schnelle Berührung"
			},
			effect: {
				'en-us': "You may switch Mothim with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Mothim as you like to the new Active Pokémon.",
				'fr-fr': "Vous pouvez échanger Papilord avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Papilord que vous le voulez.",
				'de-de': "Du kannst Moterpel gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine belibige Anzahl an Moterpel angelegter Energiekarten entfernen, und an das neue Aktive Pokémon anlegen."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It loves the honey of flowers and steals honey collected by Combee.",
	},

	thirdParty: {
		cardmarket: 278091,
		tcgplayer: 87582
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
