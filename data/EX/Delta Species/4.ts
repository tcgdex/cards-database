import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Espeon δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 70,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Heal",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon that has δ on its card. You can't use more than 1 Delta Heal Poké-Power each turn. This power can't be used if Espeon is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Psyshock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
