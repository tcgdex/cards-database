import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 130,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Untamed Punch",
				fr: "Frappe Sauvage",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 50 more damage, and both Active Pokémon are now Confused.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires, et les deux Pokémon Actifs sont maintenant Confus.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Double Stomp",
				fr: "Double Écrasement",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
