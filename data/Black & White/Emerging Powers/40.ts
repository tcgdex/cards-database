import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Scolipede",
		fr: "Brutapode",
		es: "Scolipede",
		it: "Scolipede",
		pt: "Scolipede",
		de: "Cerapendra"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		545,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
		de: "Rollum"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Toxic Claws",
				fr: "Griffes Toxiques",
				de: "Giftige Klauen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Horn",
				fr: "Corne Sauvage",
				de: "Wildhorn"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
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
		en: "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
		de: "Holt Gegner flinken Fußes ein und greift sie mit den Hörnern an seinem Kopf an. Gnade ist ihm ein Fremdwort."
	},

	thirdParty: {
		cardmarket: 280005,
		tcgplayer: 88969
	}
}

export default card
