import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Drifblim FB",
		fr: "Grodrive ",
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pump Up",
				fr: "Regonfler",
			},
			effect: {
				en: "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.",
				fr: "S'il ne reste pas plus de 3 cartes Récompense à votre adversaire, Grodrive  obtient 40 PV supplémentaires.",
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
				en: "Shadow Ball",
				fr: "Ball'ombre",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance.",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 40 dégâts. Appliquez la Faiblesse et la Résistance.",
			},

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
