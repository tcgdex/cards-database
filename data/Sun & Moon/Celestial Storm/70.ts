import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lunala",
		fr: "Lunala",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Shield",
				fr: "Spectro-Bouclier",
			},
			effect: {
				en: "If this Pokémon has any Psychic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Si de l’Énergie Psychic est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Full Moon Ray",
				fr: "Rayon Pleine Lune",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 80,

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
