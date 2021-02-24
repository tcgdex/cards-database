import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Deoxys",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
			},
			effect: {
				en: "If Deoxys and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 20 instead of 40.",
			},
			damage: 40,

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
