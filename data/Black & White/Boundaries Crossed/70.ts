import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		527,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Scout",
				fr: "Espionnage",
				de: "Späher"
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
				de: "Dein Gegner deckt seine Handkarten auf."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heart Stamp",
				fr: "Crèvecœur",
				de: "Herzstempel"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The heart-shaped mark left on a body after a Woobat has been attached to it is said to bring good fortune.",
		de: "Es verheißt Glück, wenn sich ein Fleknoil an einem Menschen festsaugt und auf ihm einen herzförmigen Fleck hinterlässt."
	},

	thirdParty: {
		cardmarket: 280657,
		tcgplayer: 90627
	}
}

export default card
