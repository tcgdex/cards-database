import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Snow-cloud Castform",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperamental Weather",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Holon Blizzard",
			},
			effect: {
				en: "If Snow-cloud Castform has any Holon Energy cards attached to it, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
