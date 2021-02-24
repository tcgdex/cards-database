import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Garbodor",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,

	evolveFrom: {
		en: "Trubbish",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poisonous Puddle",
			},
			effect: {
				en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Bomb",
			},
			effect: {
				en: undefined,
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
