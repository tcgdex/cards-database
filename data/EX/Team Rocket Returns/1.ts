import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Froth",
				de: "Froth"
			},
			effect: {
				en: "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.",
				de: "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Punch",
				de: "Water Punch"
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.",
				de: "Flip a coin for each  Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276293,
		tcgplayer: 83682
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
