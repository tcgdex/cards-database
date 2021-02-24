import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Gastly",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Fantominus",
	},
	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Pitch-Dark",
				fr: "Noir complet",
			},
			effect: {
				en: "You opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Trick Gas",
				fr: "Gaz piégeant",
			},
			effect: {
				en: "You may switch Gastly with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Fantominus avec 1 des Pokémon de votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
