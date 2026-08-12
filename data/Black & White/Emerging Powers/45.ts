import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
		de: "Mollimorba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				de: "Psystrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They use hypnosis to control people and Pokémon. Tales of Gothorita leading people astray are told in every corner.",
		de: "Es manipuliert Pokémon und Menschen mit Hypnosetricks. In Märchen tritt es oft als Entführer auf."
	},

	thirdParty: {
		cardmarket: 280010,
		tcgplayer: 85855
	}
}

export default card
