import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Genesect",
		fr: "Genesect",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fast-Flight Configuration",
				fr: "Configuration Vol Rapide",
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
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
				en: "Splitting Beam",
				fr: "Rayon Divergent",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

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
	retreat: 2,



}

export default card
