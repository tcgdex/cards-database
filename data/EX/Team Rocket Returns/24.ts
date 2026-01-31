import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Magby",
		de: "Magby"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby.",
				de: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detour",
				de: "Detour"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "If you have a Supporter card in play, use the effect on that card as effect of this attack."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276316,
		tcgplayer: 87003
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

