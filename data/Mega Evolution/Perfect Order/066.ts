import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Passerouge",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Gazouillis",
			},
			effect: {
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon avec une Résistance à Combat, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Picpic",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "sowsow",

	thirdParty: {
		cardmarket: 877482
	}
}

export default card
