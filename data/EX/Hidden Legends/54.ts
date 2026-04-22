import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		de: "Tanhel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for a Basic Pokémon and put it into your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Metal Ball",
				fr: "Boule métallique",
				de: "Metal Ball"
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon.",
				fr: "Placez 1 marqueur de dégât sur le Pokémon Défenseur.",
				de: "Put 1 damage counter on the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276102,
		tcgplayer: 83783
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
