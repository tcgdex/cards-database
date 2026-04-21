import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280353,
		tcgplayer: 90288
	}
}

export default card
