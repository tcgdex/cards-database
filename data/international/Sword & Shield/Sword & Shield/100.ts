import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo",
		'de-de': "Mogelbaum"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
				'fr-fr': "Double Pioche",
				'es-es': "Roba Doble",
				'it-it': "Pescata Doppia",
				'pt-br': "Compra Dupla",
				'de-de': "Zweifachzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Gigotage",
				'es-es': "Azote",
				'it-it': "Flagello",
				'pt-br': "Mangual",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "This attack does 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "If a tree branch shakes when there is no wind, it's a Sudowoodo, not a tree. It hides from the rain."
	},

	dexId: [185],

	thirdParty: {
		cardmarket: 436619,
		tcgplayer: 208409
	}
}

export default card
