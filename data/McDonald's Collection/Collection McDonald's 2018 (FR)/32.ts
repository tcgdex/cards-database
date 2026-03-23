import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Évoli",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Signes d'Évolution",
			},
			effect: {
				fr: "Cherchez un Minidraco, un Draco et un Dracolosse dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Coup de Queue",
			},
			damage: "10",
		},
	],
}

export default card
