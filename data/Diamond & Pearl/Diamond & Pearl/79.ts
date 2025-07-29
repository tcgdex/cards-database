import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
		de: "Wadribie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soliciting Nectar",
				fr: "Nectar alléchant",
				de: "Anlockender Nektar"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. The new Defending Pokémon is now Asleep.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Windstoß"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Un Pokémon qui en regroupe trois autres. Il est toujours occupé à apporter du nectar à Apireine."
	},

	thirdParty: {
		cardmarket: 277578
	}
}

export default card
