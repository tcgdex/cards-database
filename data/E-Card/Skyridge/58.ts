import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Girafarig",
		de: "Girafarig"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Patch",
				de: "Energieflicken"
			},
			effect: {
				en: "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.",
				de: "Nimm eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, und lege sie an ein anderes deiner Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],

			name: {
				en: "Syncroblast",
				de: "Synchroknall"
			},

			effect: {
				en: "If Girafarig and the Defending Pokémon don't have the same number of Energy cards attached to them, this attack's base damage is 10 instead of 40.",
				de: "Liegen an Girafarig und am verteidigenden Pokémon nicht die gleiche Anzahl an Energiekarten an, beträgt der Basis-Schaden dieses Angriffs 10 anstatt 40."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275316,
		tcgplayer: 85727
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
