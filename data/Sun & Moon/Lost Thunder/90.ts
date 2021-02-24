import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "DAMAGE",
				fr: "DÉGÂTS",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if there are 66 or more damage counters on your Benched Pokémon, you may use this Ability. If you do, you win this game.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si 66 marqueurs de dégâts ou plus sont sur vos Pokémon de Banc, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
