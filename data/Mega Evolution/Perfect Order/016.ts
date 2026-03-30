import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Malamandre-ex",
	},
	set: Set,
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	stage: "Stage1",
	evolveFrom: {
		fr: "Tritox",
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Machination",
			},
			effect: {
				fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Ongles Funestes",
			},
			damage: "100",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			},
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877428
	}
}

export default card
