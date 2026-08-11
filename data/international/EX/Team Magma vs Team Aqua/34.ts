import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Houndoom",
		'fr-fr': "Démolosse de Team Magma",
		'de-de': "Team Magmas Hundemon"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Target Scorch",
				'fr-fr': "Brûlure ciblée",
				'de-de': "Target Scorch"
			},
			effect: {
				'en-us': "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned.",
				'fr-fr': "Si le nom du Pokémon Défenseur comporte Team Aqua, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Damage Burn",
				'fr-fr': "Dégâts brûlants",
				'de-de': "Damage Burn"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275811,
				tcgplayer: 89829
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275811,
				tcgplayer: 89829
			}
		},
	],

}

export default card
