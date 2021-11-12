import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shining Magikarp",
		fr: "Magicarpe Brillant"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gold Scale",
				fr: "Écaille d'or"
			},
			effect: {
				en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
				fr: "Votre adversaire peut piocher 2 cartes. Quoi qu'il décide, vous pouvez aussi piocher 2 cartes."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dragon Bond",
				fr: "Lien du Dragon"
			},
			effect: {
				en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Léviator, Léviator Obscur ou Léviator Brillant dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon faible et pathétique. Il lui arrive de temps en temps de parvenir à sauter assez haut, mais il ne monte jamais au-delà de 2m."
	}
}

export default card
