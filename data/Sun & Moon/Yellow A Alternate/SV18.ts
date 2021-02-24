import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Recharge",
				fr: "Recharge Psy",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Psychic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Sphere",
				fr: "Sphère Psy",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
