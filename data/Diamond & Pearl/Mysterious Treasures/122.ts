import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lucario",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fightning",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Stance",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Lucario LV. X from your hand onto your Active Lucario, you may use this power. Prevent all effects of an attack, including damage, done to Lucario during your opponent's next turn. (If Lucario is no longer your Active Pokémon, this effect ends.)",
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
				en: "Close Combat",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Lucario by attacks is increased by 30 (after applying Weakness and Resistance).",
			},
			damage: 80,

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
