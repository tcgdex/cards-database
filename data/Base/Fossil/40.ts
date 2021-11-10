import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonistar en plus du coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon préhistorique qui disparut quand sa coquille devint trop lourde à déplacer."
	}
}

export default card
