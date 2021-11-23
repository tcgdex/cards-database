import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cranidos",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Assurance",
				fr: "Assurance"
			},
			effect: {
				en: "As long as the Defending Pokémon's remaining HP is 60 or less, this attack's base damage is 60 instead of 30.",
				fr: "Tant qu'il reste un maximum de 60 PV au Pokémon Défenseur, les dégâts de base de cette attaque sont de 60 au lieu de 30."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Hasty Headbutt",
				fr: "Coup d'boule rapide"
			},
			effect: {
				en: "Rampardos does 20 damage to itself. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Charkos s'inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Power, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	description: {
		fr: "Son violent coup de tête est assez puissant pour pulvériser les matériaux les plus résistants"
	}
}

export default card
