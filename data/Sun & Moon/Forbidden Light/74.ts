import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Diancie ◇",
		fr: "Diancie ",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 120,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Princess's Cheers",
				fr: "Vivats de Princesse",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Fighting Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Diamond Rain",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
			},
			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Pluie de Diamants",
			},
			effect: {
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
