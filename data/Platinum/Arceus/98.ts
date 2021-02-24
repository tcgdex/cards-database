import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Salamence LV. X",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],

	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Double Fall",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Salamence LV.X from your hand onto your Active Salamence, you may use this power. For each of your opponent's Pokémon that is Knocked Out by damage from Salamence's attacks this turn, take 1 more Prize card.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
			},
			effect: {
				en: "Discard an Energy card attached to Salamence.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
