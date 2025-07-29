import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fire",
				"Psychic",
			],
			name: {
				en: "Sky Heal",
				fr: "Guérison Céleste",
			},
			effect: {
				en: "If Latios is on your Bench, heal 20 damage from this Pokémon.",
				fr: "Si Latios est sur votre Banc, soignez 20 dégâts à ce Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281009
	}
}

export default card
