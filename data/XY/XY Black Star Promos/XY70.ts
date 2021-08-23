import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Tyrantrum EX",
		fr: "Rexillius EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		697,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Despotic Fang",
				fr: "Croc Despotique",
			},
			effect: {
				en: "Damage from this Pokémon’s attacks isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts des attaques de ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dragon Impact",
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
