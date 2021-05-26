import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Copperajah",
		fr: "Pachyradjah"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cufant",
		fr: "Charibari"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Antibacterial Skin",
				fr: "Peau Stérilisante"
			},
			effect: {
				en: "This Pokémon can’t be affected by any Special Conditions.",
				fr: "Ce Pokémon ne peut être affecté par aucun État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeful Stomp",
				fr: "Écrasement Vengeur"
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires."
			},
			damage: "120+",

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
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,



}

export default card
