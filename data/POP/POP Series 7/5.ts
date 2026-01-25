import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Mothim",
		fr: "Mothim"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		414,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Silver Wind",
				fr: "Vent argenté"
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Raging Scales",
				fr: "Écailles enragées"
			},
			effect: {
				en: "If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.",
				fr: "Si Papilord possède des marqueurs de dégât, cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "It loves the honey of flowers and steals honey collected by COMBEE."
	},

	retreat: 0,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278037,
		tcgplayer: 87581
	}
}

export default card
