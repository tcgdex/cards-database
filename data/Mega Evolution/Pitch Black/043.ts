import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		'es-mx': "Primeape",
		de: "Rasaff",
		it: "Primeape",
		pt: "Primeape"
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
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha"
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
