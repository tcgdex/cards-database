import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Houndoom",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Fire Counterattack",
			},
			effect: {
				en: "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Roar",
			},
			effect: {
				en: "Your opponent discards a card from his or her hand.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
