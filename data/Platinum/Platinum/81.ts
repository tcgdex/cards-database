import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		270,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Ball",
				fr: "Eco-Sphère",
				de: "Energy Ball"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Nénupiot qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				de: "Synthesis"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie Grass et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Flip a coin. If heads, search your deck for a  Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
