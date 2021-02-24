import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Tyranitar δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 120,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Draw",
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on top of your deck. This power can't be used if Tyranitar is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Delta Crush",
			},
			effect: {
				en: "You may discard an Energy card attached to Tyranitar. If you do, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
