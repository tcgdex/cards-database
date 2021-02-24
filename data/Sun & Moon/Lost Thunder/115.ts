import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		246,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième Coup",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has 3 or more damage counters on it, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà 3 marqueurs de dégâts ou plus, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
