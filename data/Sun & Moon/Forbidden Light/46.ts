import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		679,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Hour",
				fr: "Dernière Heure",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
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
				en: "Slash",
				fr: "Tranche",
			},

			damage: 50,

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
