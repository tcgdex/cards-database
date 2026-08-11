import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [760],
	set: Set,

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bear Hug"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn."
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
				'en-us': "Superpower"
			},
			effect: {
				'en-us': "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself."
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