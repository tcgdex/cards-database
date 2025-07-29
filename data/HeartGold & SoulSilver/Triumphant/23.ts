import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Lock",
				fr: "Verrou psy",
				de: "Psycho-Schloss"
			},
			effect: {
				en: "Your opponent can’t use any Poké-Powers on his or her Pokémon on his or her next turn.",
				fr: "Votre adversaire ne peut utiliser aucun Poké-Power sur ses Pokémon lors de son prochain tour.",
				de: "Dein Gegner kann in seinem nächsten Zug keine Poké-Power seiner Pokémon benutzen."
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
				en: "Bench Manipulation",
				fr: "Manipulation de Banc",
				de: "Bankmanipulation"
			},
			effect: {
				en: "Your opponent flips a coin for each of his or her Benched Pokémon. This attack does 40 damage times the number of tails. This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Votre adversaire lance une pièce pour chacun de ses Pokémon de Banc. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés pile. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Dein Gegner wirft eine Münze für jedes Pokémon auf seiner Bank. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Zahl\" zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: "40x",

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
		en: "It can perform odd dance steps to influence foes. Its style of dancing became hugely popular overseas."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279553
	}
}

export default card
