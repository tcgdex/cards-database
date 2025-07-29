import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Victory Kiss",
				fr: "Baiser de la Victoire",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may heal 10 damage from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez soigner 10 dégâts à votre Pokémon Actif.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hug",
				fr: "Câlin",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288474
	}
}

export default card
