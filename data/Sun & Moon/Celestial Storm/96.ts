import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
			},
			effect: {
				en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Silver Fist",
				fr: "Poing Argenté",
			},
			effect: {
				en: "If your opponent's Active Pokémon has an Ability, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
