import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 150,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Red Banquet",
				fr: "Festin Carmin",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
