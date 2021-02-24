import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Typhlosion",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fire Recharge",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Burst",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.",
			},
			damage: 60,

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
