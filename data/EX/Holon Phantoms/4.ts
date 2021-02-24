import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Deoxys δ",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 80,
	types: [
		"Metal",
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
				"Metal",
				"Colorless",
			],
			name: {
				en: "Delta Reduction",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Deoxys by attacks is reduced by 30 (before applying Weakness and Resistance).",
			},
			damage: 30,

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
