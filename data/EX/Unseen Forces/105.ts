import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Lugia ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 100,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Silver Sparkle",
			},
			effect: {
				en: "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return it to your opponent's hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Water",
				"Fire",
			],
			name: {
				en: "Elemental Blast",
			},
			effect: {
				en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia ex.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
