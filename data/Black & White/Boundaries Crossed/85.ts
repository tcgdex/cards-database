import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		558,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sturdy",
				fr: "Fermeté",
			},
			effect: {
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, ce Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
