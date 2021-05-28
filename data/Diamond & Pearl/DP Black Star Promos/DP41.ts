import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Toxicroak G",
	},
	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Leap Away",
			},
			effect: {
				en: "Once during your turn (before your attack), if Toxicroak  is your Active Pokémon, you may flip a coin. If heads, return Toxicroak  and all cards attached to it to your hand. This Power can't be used if Toxicroak  is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Revenge",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

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
