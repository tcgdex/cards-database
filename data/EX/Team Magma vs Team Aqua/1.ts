import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Cacturne",
		fr: "Cacturne de Team Aqua",
		de: "Team Aquas Noktuska"
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
				fr: "Sombre étreinte",
				de: "Dark Bind"
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.\"",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Cacturne de Team Aqua. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
				de: "You may discard a  Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed."
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
				fr: "Barbelés empoisonnés",
				de: "Poison Barb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
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

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275978,
		tcgplayer: 89775
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
