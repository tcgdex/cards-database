import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Togetic",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togepi",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still ). Togetic performs that attack.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
