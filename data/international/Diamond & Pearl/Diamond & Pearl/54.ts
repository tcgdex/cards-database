import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Ray",
				'fr-fr': "Rayon magnétique",
				'de-de': "Magnetstrahl"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has any Energy attached to it and switch that Pokémon with 1 of the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire possédant de l'Énergie et l'échanger avec 1 des Pokémon Défenseurs.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners, an dem mindestens 1 Energie angelegt ist, wählen und es gegen 1 Verteidigendes Pokémon austauschen."
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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is actually three MAGNEMITE linked by magnetism. A group can set off a magnetic storm.",
		'fr-fr': "Il est formé de trois Magneti liés par magnétisme. En groupe, ils déclenchent un orage magnétique."
	},

	thirdParty: {
		cardmarket: 277553,
		tcgplayer: 87107
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
