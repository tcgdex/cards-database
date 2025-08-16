import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Aerodactyl",
		de: "Aerodactyl"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ancient Wind",
				de: "Ancient Wind"
			},
			effect: {
				en: "Once during your turn (before you attack) if Aerodactyl is your Active Pokémon, you may ignore all Poké-Bodies until the end of your turn. This power can't be used if Aerodactyl is affected by a Special Condition.",
				de: "Once during your turn (before your attack), if Aerodactyl is your Active Pokémon, you may ignore all Poké-Bodies until the end of your turn. This power can't be used if Aerodactyl is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				de: "Rising Lunge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275259,
		tcgplayer: 83465
	}
}

export default card
