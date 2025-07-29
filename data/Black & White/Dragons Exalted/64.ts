import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour Rapide",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pok��mon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280503
	}
}

export default card
