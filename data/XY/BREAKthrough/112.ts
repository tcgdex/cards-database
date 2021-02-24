import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tuning",
				fr: "Accordage",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
