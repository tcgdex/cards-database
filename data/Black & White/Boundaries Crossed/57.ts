import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
				de: "Nitroladung"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
		de: "Ein stürmischer Geselle. Wenn es wütend ist, feuert es über seine Mähne in alle Richtungen Stromsalven ab."
	},

	thirdParty: {
		cardmarket: 280644,
		tcgplayer: 90731
	}
}

export default card
