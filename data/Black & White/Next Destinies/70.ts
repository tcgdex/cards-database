import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Penalty",
				fr: "Punition Obscure",
			},
			effect: {
				en: "If the Defending Pokémon has no Pokémon Tool card attached to it, this attack does nothing.",
				fr: "S'il n'y a pas de carte Outil Pokémon attachée au Pokémon Défenseur, cette attaque ne fait rien.",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280295
	}
}

export default card
