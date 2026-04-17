import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [760],

	hp: 130,

	types: ["Colorless"],

	stage: "Stage1",

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				en: "Split Spiral Punch",
			},
			damage: 40,
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				en: "Strength",
			},
			damage: 130,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670477,
				tcgplayer: 281504
			}
		}
	]
}

export default card

