import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo Niv. 43",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Shark",
				fr: "Énergie requin",
			},
			effect: {
				en: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), flip a coin. If heads, discard an Energy card attached to the Attacking Pokémon.",
				fr: "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O), lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Machouille",
			},
			effect: {
				en: "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage to that Pokémon until the end of your next turn.",
				fr: "Si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque lui inflige 40 dégâts supplémentaires jusqu'à la fin de votre prochain tour.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc aiguisé",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
