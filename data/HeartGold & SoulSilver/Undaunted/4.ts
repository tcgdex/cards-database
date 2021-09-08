import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Ninja Fang",
				fr: "Croc Ninja",
			},
			effect: {
				en: "If, before Gliscor does damage, the Defending Pokémon has no damage counters on it and is then damaged by this attack (after applying Weakness and Resistance), the Defending Pokémon is now Paralyzed.",
				fr: "Si, avant que Scorvol n’inflige de dégâts, le Pokémon Défenseur n’a aucun marqueur de dégât et qu’il subit ensuite des dégâts à cause de cette attaque (après application de la Faiblesse et de la Résistance), il est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
