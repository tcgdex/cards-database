import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [760],
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Colorless"
	],

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
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bear Hug"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 40
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Superpower"
			},
			effect: {
				en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself."
			},
			damage: "80+"
		},
	],
	stage: "Stage1",
	retreat: 3,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297253,
				tcgplayer: 152874
			}
		},
	],

}

export default card