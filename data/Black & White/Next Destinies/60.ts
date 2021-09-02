import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		555,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Synchrodraw",
				fr: "Pioche Synchro",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "DarMAXitan",
				fr: "DaruMax",
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
