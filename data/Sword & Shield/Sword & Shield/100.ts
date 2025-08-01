import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
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
				en: "Double Draw",
				fr: "Double Pioche",
				es: "Roba Doble",
				it: "Pescata Doppia",
				pt: "Compra Dupla",
				de: "Zweifachzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Gigotage",
				es: "Azote",
				it: "Flagello",
				pt: "Mangual",
				de: "Dreschflegel"
			},
			effect: {
				en: "This attack does 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu."
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
		en: "If a tree branch shakes when there is no wind, it's a Sudowoodo, not a tree. It hides from the rain."
	},

	dexId: [185],

	thirdParty: {
		cardmarket: 436619
	}
}

export default card
