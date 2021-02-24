import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Typhlosion",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 110,
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
				en: "Firestarter",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Typhlosion is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Evaporating Heat",
			},
			effect: {
				en: "Discard a Water Energy attached to the Defending Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
