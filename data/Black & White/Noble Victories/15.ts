import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "V-create",
				fr: "Coup Victoire",
			},
			effect: {
				en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
				fr: "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280137,
		tcgplayer: 90344
	}
}

export default card
