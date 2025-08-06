import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
		de: "Chelterrar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		389,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
				fr: "Explosion verte",
				de: "Green Blast"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Grass attachée à tous vos Pokémon.",
				de: "Does 40 damage plus 10 more damage for each  Energy attached to all of your Pokémon."
			},
			damage: "40+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur apaisante",
				de: "Soothing Scent"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278460,
		tcgplayer: 89986
	}
}

export default card
