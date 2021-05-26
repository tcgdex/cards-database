import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Porygon2",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Backup",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Machine Burst",
			},
			effect: {
				en: "If Porygon2 has a Technical Machine card attached to it, the Defending Pokémon is now Asleep and Burned.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
