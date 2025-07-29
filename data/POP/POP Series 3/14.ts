import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gouge",
				fr: "Griffes rétractiles"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277462
	}
}

export default card
