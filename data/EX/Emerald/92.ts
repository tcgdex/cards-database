import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Camerupt ex",
		fr: "Camerupt ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magma Armor",
				fr: "Magmascudo"
			},
			effect: {
				en: "Camerupt ex can't be Asleep or Paralyzed.",
				fr: "Camerupt ex ne peut pas être Endormi ou Paralysé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Eruption",
				fr: "Éruption"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
