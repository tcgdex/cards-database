import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Dewott",
		fr: "Mateloutre",
		es: "Dewott",
		it: "Dewott",
		pt: "Dewott",
		de: "Zwottronin"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Tail",
				fr: "Hydroqueue",
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 10 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 279767
	}
}

export default card
