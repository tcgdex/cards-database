import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Slowking",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cunning",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck. This power can't be used if Dark Slowking is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Shock",
			},
			effect: {
				en: "Don't apply Weakness or Resistance for this attack.",
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
