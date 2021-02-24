import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		37,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Reheat",
				fr: "Réchauffer",
			},
			effect: {
				en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
