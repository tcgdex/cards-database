import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Arcanin",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [59],
	hp: 130,
	types: ["Fire"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Aimant Inquisiteur",
			},
			effect: {
				fr: "Cherchez jusqu'à 3 cartes Énergie Électrique dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Charge",
			},
			damage: "10",
		},
	],
}

export default card
