import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'de-de': "Darkrai"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 90,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Darkness Aura",
				'de-de': "Darkness Aura"
			},
			effect: {
				'en-us': "If you have Cresselia in play, each of Darkrai's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'de-de': "If you have Cresselia in play, each of Darkrai's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'de-de': "Hypnoblast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "To protect itself, it afflicts those around it with nightmares. However, it means no harm.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
