import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Crobat V",
		fr: "Nostenfer V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Asset",
				fr: "Atout Obscur"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can’t use more than 1 Dark Asset Ability each turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu’à en avoir 6 en main. Vous ne pouvez utiliser qu’un talent Atout Obscur par tour."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
