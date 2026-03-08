import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskeregen"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Whirlwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				de: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Silver Wind",
				fr: "Vent argenté",
				de: "Silver Wind"
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
				fr: "Lors de votre prochain tour, si vous attaquez en utilisant le Vent argenté de Maskadra (après application de la Faiblesse et de la Résistance), cette attaque inflige 30 dégâts supplémentaires.",
				de: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276094,
		tcgplayer: 87244
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
