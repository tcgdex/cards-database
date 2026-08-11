import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libégon",
	},
	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sand Slammer",
				'fr-fr': "Prison de Sable",
			},
			effect: {
				'en-us': "At any time between turns, if this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "N'importe quand entre chaque tour, si ce Pokémon est votre Pokémon Actif, placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flying Beatdown",
				'fr-fr': "Dérouillée Volante",
			},
			effect: {
				'en-us': "You may discard a Grass Energy and a Fighting Energy attached to this Pokémon. If you do, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Vous pouvez défausser une Énergie Grass et une Énergie Fighting attachées à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Known as \"The Desert Spirit,\" this Pokémon hides in the sandstorms it causes by beating its wings.",
	},
}

export default card
