import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Pidgey",
		fr: "Roucool",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		16,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Messenger",
				fr: "Messager",
			},
			effect: {
				en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez Roucool et toutes les cartes qui lui sont attachées avec votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissade",
			},

			damage: 10,

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



}

export default card
