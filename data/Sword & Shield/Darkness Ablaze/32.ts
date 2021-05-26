import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Feathers",
				fr: "Plumes Calcinantes"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon de votre adversaire (même si ce Pokémon-ci est mis K.O.), le Pokémon Attaquant est maintenant Brûlé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Flight",
				fr: "Vol Supersonique"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 120,

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
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
