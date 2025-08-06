import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Stunky",
		fr: "Moufouette",
		de: "Skunkapuh"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		434,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	evolveFrom: {
		fr: "Moufouette",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Gnaw and Run",
				fr: "Ronger et courrir",
				de: "Annagen und Abhauen"
			},
			effect: {
				en: "Switch Stunky with 1 of your Benched Pokémon.",
				fr: "Échangez Moufouette avec 1 des Pokémon de votre Banc.",
				de: "Tausche Skunkapuh gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il se protège en expulsant un fluide nocif par son derrière. La puanteur dure 24 heures."
	},

	thirdParty: {
		cardmarket: 278374,
		tcgplayer: 89586
	}
}

export default card
