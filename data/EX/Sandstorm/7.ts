import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rain Dish",
				fr: "Cuvette"
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Ludicolo.",
				fr: "N'importe quand entre deux tours, retirez un marqueur de dégât à Ludicolo."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Punch",
				fr: "Hydro-poing"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Water Energy attached to Ludicolo but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Ludicolo qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
