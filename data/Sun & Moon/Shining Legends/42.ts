import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Jirachi",
		fr: "Jirachi Brillant",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 70,
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
				en: "Stellar Reign",
				fr: "Règne Stellaire",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting all of the Evolution cards on it into your opponent's hand.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant toutes les cartes Évolution placées dessus dans la main de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
