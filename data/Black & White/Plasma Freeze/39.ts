import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		644,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe",
				de: "Tempoklaue"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fusion Bolt",
				fr: "Éclair Croix",
				de: "Kreuzdonner"
			},
			effect: {
				en: "If Reshiram is on your Bench, this attack does 40 more damage.",
				fr: "Si Reshiram est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn sich Reshiram auf deiner Bank befindet, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world.",
		de: "Ein Legendäres Pokémon mit der Macht, die Welt durch Donner einzuäschern. Hilft allen, die einer Welt der Wünsche harren."
	},

	thirdParty: {
		cardmarket: 280917,
		tcgplayer: 90736
	}
}

export default card
