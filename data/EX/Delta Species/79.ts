import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Poochyena",
		fr: "Medhyena",
		de: "Fiffyen"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roar",
				fr: "Hurlement",
				de: "Roar"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				de: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				de: "Ambush"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

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
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276842,
		tcgplayer: 88297
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

