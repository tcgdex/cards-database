import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "More Poison",
				fr: "Poison Sans Fin",
			},
			effect: {
				en: "Put 2 more damage counters on your opponent’s Poisoned Pokémon during Pokémon Checkup.",
				fr: "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes Empoisonnées",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
