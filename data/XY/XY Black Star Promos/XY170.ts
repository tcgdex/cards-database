import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Salamence EX",
		fr: "Drattak-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beastly Fang",
				fr: "Croc Bestial"
			},
			effect: {
				en: "This attack does 50 more damage for each of your opponent's Pokémon-EX.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon-EX de votre adversaire."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Strike",
				fr: "Frappe du Dragon"
			},
			effect: {
				en: "This Pokémon can't use Dragon Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 295161
	}
}

export default card
