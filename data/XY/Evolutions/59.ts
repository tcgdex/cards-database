import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 160,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Seismic Toss",
				fr: "Talent : Contre-Attaque",
			},
			effect: {
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
			damage: 120,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				fr: "Frappe Atlas",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
