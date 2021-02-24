import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Bronzong",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Oracle",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. Then, discard a card from your hand. If you discard an Energy card, draw 1 more card. This power can't be used if Bronzong is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Shady Stamp",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
