import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reinforced Lariat",
				fr: "Bras Renforcés",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 40 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281070
	}
}

export default card
