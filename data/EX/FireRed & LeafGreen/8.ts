import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidoking",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Nidorino",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Gene",
			},
			effect: {
				en: "As long as Nidoking is in play, your attacks by Nidoran ♀, Nidorina, Nidoqueen, Nidoran ♂, and Nidorino do 10 more damage to the Defending Pokemon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Earth Poison",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Poisoned.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bound Crush",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Nidoking can't use Bound Crush during your next turn.",
			},

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
