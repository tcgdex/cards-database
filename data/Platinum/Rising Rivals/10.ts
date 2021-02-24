import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Mismagius GL",
		fr: "Magirêve  Niv. 26",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		429,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Removal",
				fr: "Psycho-suppression",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si ce sont 2 faces, défaussez toute l'Énergie attachée au Pokémon Défenseur.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Grudge",
				fr: "Rancune",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récolté.",
			},
			damage: 20,

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
