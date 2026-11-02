import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		293,
	],

	hp: 70,

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
				en: "Shout",
				fr: "Braillement",
				de: "Krakeeler"
			},
			effect: {
				en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
				fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
				de: "Wirf 1 Münze. Nimm bei „Kopf“ 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				de: "Schallwelle"
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

	retreat: 2,

	description: {
		en: "Usually, its cries are like quiet murmurs. If frightened, it shrieks at the same volume as a jet plane.",
		de: "Normalerweise klingen seine Rufe wie Gemurmel. Hat es aber Angst, ist es so laut wie ein Flugzeug."
	},

	thirdParty: {
		cardmarket: 280845,
		tcgplayer: 90585
	}
}

export default card
