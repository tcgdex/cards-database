import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr",
		de: "Shuppet"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		353,
	],

	hp: 40,

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
				en: "Shadow Crush",
				fr: "Écras'ombre",
				de: "Shadow Crush"
			},
			effect: {
				en: "You may discard 1 Psychic Energy card attached to Shuppet. If you do, your opponent discards 1 Energy card attached to the Defending Pokémon.",
				fr: "Vous pouvez défausser 1 carte Énergie  attachée à Polichombr. Votre adversaire défausse alors 1 carte Énergie attachée au Pokémon Défenseur.",
				de: "You may discard 1  Energy card attached to Shuppet. If you do, your opponent discards 1 Energy card attached to the Defending Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276146,
		tcgplayer: 89196
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
