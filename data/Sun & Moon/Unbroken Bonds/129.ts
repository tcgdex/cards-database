import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Melmetal",
		fr: "Melmetal",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Eater",
				fr: "Mange Métal",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Metal Pokémon from your hand. If you do, heal 100 damage from this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon Metal de votre main. Dans ce cas, soignez 100 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
