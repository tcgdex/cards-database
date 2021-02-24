import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
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
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Scales",
				fr: "Écailles Brûlantes",
			},
			effect: {
				en: "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
				fr: "Placez 4 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
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
				en: "Burning Wind",
				fr: "Vent Torride",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
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



}

export default card
