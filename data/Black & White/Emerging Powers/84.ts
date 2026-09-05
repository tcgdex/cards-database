import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Last Resort",
				fr: "Dernierecour",
				de: "Zuflucht"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

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
		en: "These Pokémon prefer a tidy habitat. They are always sweeping and dusting, using their tails as brooms.",
		de: "Ein Pokémon mit Putzfimmel. Es benutzt seinen Schweif als Staubwedel und fegt seinen Bau, bis alles picobello ist."
	},

	thirdParty: {
		cardmarket: 280049,
		tcgplayer: 87474
	}
}

export default card
