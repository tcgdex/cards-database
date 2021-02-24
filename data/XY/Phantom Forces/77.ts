import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slip Trip",
				fr: "Bave Glissante",
			},
			effect: {
				en: "Each player can't attach any Pokémon Tool cards from his or her hand to any of his or her Pokémon.",
				fr: "Aucun joueur ne peut attacher de carte Outil Pokémon de sa main à ses Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
