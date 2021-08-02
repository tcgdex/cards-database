import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweeping Cure",
				fr: "Guérison Extensive",
			},
			effect: {
				en: "Heal 90 damage from 1 of your Benched Pokémon.",
				fr: "Soignez 90 dégâts à l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Away",
				fr: "Asticotage",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
