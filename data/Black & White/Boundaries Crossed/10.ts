import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Drain",
				fr: "Feuille Sangsue",
				de: "Blattsauger"
			},
			effect: {
				en: "Flip a coin. If heads, heal 30 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts à ce Pokémon.",
				de: "Wirf 1 Münze. Heile bei „Kopf“ 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude.",
		de: "Wird es umarmt, empfindet es Dankbarkeit, was wiederum dazu führt, dass seine Blumen blühen."
	},

	thirdParty: {
		cardmarket: 280597,
		tcgplayer: 89110
	}
}

export default card
