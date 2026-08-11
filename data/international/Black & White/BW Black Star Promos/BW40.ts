import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Scorching Scales",
				'fr-fr': "Écailles Brûlantes",
			},
			effect: {
				'en-us': "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
				'fr-fr': "Placez 4 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Wind",
				'fr-fr': "Vent Torride",
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales.",
	},
}

export default card
