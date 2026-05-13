import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [975],

	hp: 180,

	types: ["Water"],

	stage: "Stage1",

	evolveFrom: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Hammer In",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				en: "Sweeping Tackle",
			},
			damage: "200-",
			effect: {
				en: "This attack does 20 less damage for each damage counter on this",
			},
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725422,
				tcgplayer: 516516
			}
		}
	]
}

export default card

