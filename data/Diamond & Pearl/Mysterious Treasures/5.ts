import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Blissey",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Kind Egg",
			},
			effect: {
				en: "Once during your turn (before your attack), if Happiny is anywhere under Blissey, you may choose a number of cards in your hand up to the amount of Energy attached to Blissey and put those cards on top of your deck. Shuffle your deck afterward. Then, draw that many cards. This power can't be used if Blissey is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Happy Chance",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Blissey. Before doing damage, you may search your discard pile for a basic Energy card and attach it to Blissey.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],





}

export default card
