import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Delcatty",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Draw",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Max Energy Source",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
