import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Tyranitar",
		de: "Dunkles Despotar"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		en: "Dark Pupitar",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Damage",
				de: "Sand Damage"
			},
			effect: {
				en: "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
				de: "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				de: "Second Strike"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
				de: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276311,
		tcgplayer: 84662
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		}
	]
}

export default card
