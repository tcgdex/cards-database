import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Aerodactyl ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Lock",
			},
			effect: {
				en: "As long as Aerodactyl ex is in play, your opponent can't play Pokémon Tool cards. Remove any Pokémon Tool cards attached to your opponent's Pokémon and put them into his or her discard pile.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 60,

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
