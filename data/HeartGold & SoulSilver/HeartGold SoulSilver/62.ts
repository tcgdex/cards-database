import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
				de: "Schlafeinflößer"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent’s Benched Pokémon. The new Defending Pokémon is now Asleep.",
				fr: "Échangez le Pokémon Défenseur avec un Pokémon du Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle douce",
				de: "Sanfter Hieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279034,
		tcgplayer: 84977
	}
}

export default card
