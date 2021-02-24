import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 180,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
				fr: "Contre-Attaque",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 4 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamic Swing",
				fr: "Retour Dynamique",
			},
			effect: {
				en: "You may do 100 more damage. If you do, during your opponent's next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
