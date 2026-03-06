import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Rampardos"
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
		en: "Cherrim",
		fr: "Kranidos"
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
				en: "As long as the Defending Pokémon’s remaining HP is 60 or less, this attack’s base damage is 60 instead of 30.",
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
				en: "Rampardos does 20 damage to itself. This attack’s damage isn’t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
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
		en: "Its powerful head butt has enough power to shatter even the most durable things upon impact."
	},

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277890,
		tcgplayer: 88570
	}
}

export default card
