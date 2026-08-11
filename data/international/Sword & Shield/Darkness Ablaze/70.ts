import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [209],

	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		en: "In contrast to its appearance, it's quite timid. When playing with other puppy Pokémon, it sometimes gets bullied."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483229,
				tcgplayer: 219445
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483229,
				tcgplayer: 219445
			}
		},
	],
}

export default card
