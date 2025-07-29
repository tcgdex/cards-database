import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de la Team Aqua",
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Team Aqua's Spheal",
		fr: "Obalie de la Team Aqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Splatter",
				fr: "Crépitement",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hail Storm",
				fr: "Déluge de Grêle",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Team Magma Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Magma, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 282515
	}
}

export default card
