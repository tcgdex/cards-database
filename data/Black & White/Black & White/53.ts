import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
		es: "Whirlipede",
		it: "Whirlipede",
		pt: "Whirlipede",
		de: "Rollum"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		544,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
		de: "Toxiped"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				de: "Giftstachel"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Protected by a hard shell, it spins its body like a wheel and crashes furiously into its enemies.",
		de: "Von einem harten Schutzpanzer umgeben. Es greift seine Gegner an, indem es mit Karacho wie ein Rad in sie hineinrollt."
	},

	thirdParty: {
		cardmarket: 279791,
		tcgplayer: 90570
	}
}

export default card
