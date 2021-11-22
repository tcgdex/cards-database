import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		701,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Spirit",
				fr: "Esprit Rayonnant",
			},
			effect: {
				en: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
				fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flying Press",
				fr: "Flying Press",
			},
			effect: {
				en: "If your opponent's Active Pokémon isn't a Pokémon-EX, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-EX, cette attaque ne fait rien.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
