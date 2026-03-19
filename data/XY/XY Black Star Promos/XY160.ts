import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Wing",
				fr: "Aile Glace"
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frosty Thunder",
				fr: "Tonnerre Givré"
			},
			effect: {
				en: "If this Pokémon has any Lightning Energy attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply weakness and Resistance for Benched Pokémon.)",
				fr: "Si de l'Énergie  est attachée à ce Pokémon, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 289803
	}
}

export default card
