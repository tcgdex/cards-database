import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Some researchers theorize that Primeape remains angry even when inside a Poké Ball.",
		de: "Der Theorie eines Forschers zufolge schäumt Rasaff sogar im Inneren von Pokébällen weiter vor Wut."
	},

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		'es-mx': "Primeape",
		de: "Rasaff"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			de: "Korkenzieherhieb"
		},

		cost: ["Colorless", "Colorless"],

		damage: 50
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895829,
				tcgplayer: 704800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895829,
				tcgplayer: 704800
			}
		},
	],
}

export default card
