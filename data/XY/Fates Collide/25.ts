import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Alakazam EX",
		fr: "Alakazam-EX",
	},
	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 160,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Kinesis",
				fr: "Télékinésie",
			},
			effect: {
				en: "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent’s Active Pokémon and 3 damage counters on 1 of your opponent’s Benched Pokémon.",
				fr: "Lorsque vous jouez M-Alakazam-EX de votre main pour faire évoluer ce Pokémon, avant qu'il n'évolue, vous pouvez placer 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire et 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Suppression",
				fr: "Suppression",
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent’s Pokémon that has any Energy attached to it.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel de l'Énergie est attachée.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
