import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		fr: "Typhlosion",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		fr: "Feurisson",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Explosible",
			},
			effect: {
				fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Enfer Explosif",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
