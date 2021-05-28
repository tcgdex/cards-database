import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poisonous Puddle",
				fr: "Flaque Toxique"
			},
			effect: {
				en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
				fr: "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné."
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
				fr: "Bombe Beurk"
			},
			effect: {
				en: undefined,
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
