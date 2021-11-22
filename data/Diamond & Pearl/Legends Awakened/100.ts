import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gut Kick",
				fr: "Coup d'pied d'tripes",
			},
			effect: {
				en: "If Tyrogue is anywhere under Hitmonlee, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Debugant se trouve sous Kicklee, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
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
				en: "Mega Kick",
				fr: "Ultimawashi",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Ses pattes élastiques s'allongent, ce qui ne manque jamais de surprendre au premier combat."
	}
}

export default card
