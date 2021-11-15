import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Cacturne",
		fr: "Cacturne de Team Aqua"
	},
	illustrator: "K. Utsunomiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 80,
	types: [
		"Grass",
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Bind",
				fr: "Sombre étreinte"
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.\"",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Cacturne de Team Aqua. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Barb",
				fr: "Barbelés empoisonnés"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
