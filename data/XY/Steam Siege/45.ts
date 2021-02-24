import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "King's Palace",
				fr: "Palais Royal",
			},
			effect: {
				en: "Your Nidoqueen's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Nidoqueen infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Power Lariat",
				fr: "Lasso Puissant",
			},
			effect: {
				en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
