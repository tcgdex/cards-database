import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fight Back",
				fr: "Rendre les Coups",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
