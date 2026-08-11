import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'de-de': "Banette"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Bodyguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Branette par les Pokémon-ex de votre adversaire.",
				'de-de': "Verhindere alle Effekte von Angiffen inklusive Schaden, die Banette von gegnerischen Pokémon-ex zugefügt werden."
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
				'en-us': "Night Murmurs",
				'fr-fr': "Murmures nocturnes",
				'de-de': "Nachtgeflüster"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il est maintenant Confus.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, ist es jetzt verwirrt."
			},
			damage: 30,

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
		cardmarket: 277082,
		tcgplayer: 83720
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
