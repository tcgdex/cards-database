import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu"
	},

	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Natu",
		fr: "Natu"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Warp",
				fr: "Téléportation d’Énergie"
			},
			effect: {
				en: "Move an Energy from 1 of your opponent's Benched Pokémon to their Active Pokémon.",
				fr: "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers son Pokémon Actif."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Psychic"]
}

export default card
