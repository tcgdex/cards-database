import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turn Back Time",
				fr: "Retour Dans le Temps",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Blast",
				fr: "Violente Déflagration",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
