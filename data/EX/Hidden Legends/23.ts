import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Rain Castform",
	},
	illustrator: "Jungo Suzuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 60,
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
				en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Scattered Shower",
			},
			effect: {
				en: "Shuffle your hand into your deck. Draw up to 5 cards.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainy Day Blues",
			},
			effect: {
				en: "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
