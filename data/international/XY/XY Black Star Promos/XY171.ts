import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Salamence-EX",
		'fr-fr': "M-Drattak-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 230,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Salamence-EX",
		'fr-fr': "Drattak-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Savage Wing",
				'fr-fr': "Aile Sauvage"
			},
			effect: {
				'en-us': "Discard as many basic Fire Energy attached to this Pokémon as you like. This attack does 40 more damage for each Energy card discarded in this way.",
				'fr-fr': "Défaussez autant d'Énergies  attachées à ce Pokémon que vous voulez. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],
	retreat: 1,






}

export default card
