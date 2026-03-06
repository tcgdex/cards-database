import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Kingdra ex",
		fr: "Hyporoi ex",
		de: "Seedraking ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Genetic Memory",
				fr: "Mémoire Génétique",
				de: "Genetic Memory"
			},
			effect: {
				en: "Use any attack from Kingdra ex's Basic Pokémon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)",
				fr: "Utilisez n'importe quelle attaque de la carte Pokémon de base ou de la carte Évolution Niveau 1 d'Hyporoi ex. (Hyporoi ex ne paye pas le Coût en Énergie de cette attaque).",
				de: "Use any attack from Kindra ex's Basic Pokémon card or Stage 1 Evolution card. (Kindra ex doesn't have to pay for that attack's Energy cost.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
				fr: "Canon à O",
				de: "Hydrocannon"
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  attachée à Hyporoi ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Does 50 damage plus 20 more damage for each  Energy attached to Kindra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 86451,
		cardmarket: 275969
	}
}

export default card
