import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Lucario",
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Reflexive Retaliation",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Aura Sphere",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281231
	}
}

export default card
