import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		es: "Gigalith",
		it: "Gigalith",
		pt: "Gigalith",
		de: "Brockoloss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Core Cannon",
				fr: "Super Canon",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Fighting Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à 1 des Pokémon de votre adversaire pour chaque Énergie Fighting attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280184
	}
}

export default card
