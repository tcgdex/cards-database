import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},
	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amazing Plea",
				fr: "Requête Incroyable",
			},
			effect: {
				en: "Choose 2 cards from your discard pile. Then, ask your opponent if you may put them into your hand. If yes, put those cards into your hand. If no, this attack does 80 damage to your opponent's Active Pokémon.",
				fr: "Choisissez 2 cartes dans votre pile de défausse. Ensuite, demandez à votre adversaire si vous pouvez les mettre dans votre main. Si oui, placez ces cartes dans votre main. Si non, cette attaque inflige 80 dégâts au Pokémon Actif de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
