import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Voltali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [],
			name: {
				fr: "Ruée Vers l'Or",
			},
			damage: "30×",
			effect: {
				fr: "Défaussez autant de cartes Énergie Métal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
			},
		},
	],
}

export default card
