import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Charge",
				fr: "Chargeur",
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Bomb",
				fr: "Bombe Fracassante",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
