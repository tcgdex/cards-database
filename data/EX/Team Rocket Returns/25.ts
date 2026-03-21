import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Misdreavus",
		de: "Traunfugil"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Spell",
				de: "Dark Spell"
			},
			effect: {
				en: "Once during your turn (before your attack), if Misdreavus is your Active Pokémon, you may flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Misdreavus is affected by a Special Condition or if your other Active Pokémon is not Misdreavus.",
				de: "Once during your turn (before your attack), if Misdreavus is your Active Pokémon, you may flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Misdreavus is affected by a Special Condition or if your other Active Pokémon is is not Misdreavus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hide in Shadows",
				de: "Hide in Shadows"
			},
			effect: {
				en: "Switch Misdreavus with 1 of your Benched Pokémon.",
				de: "Switch Misdreavus with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276317,
		tcgplayer: 87504
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

