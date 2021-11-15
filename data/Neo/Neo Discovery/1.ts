import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dodrio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko"
			},
			effect: {
				en: "Does 30 damage plus 10 more for each Energy Card attached to the Defending Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "La belle fourrure qui recouvre son corps peut sentir les courants aériens et prédire les actions de son ennemi."
	}
}

export default card
