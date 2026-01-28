import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sneasel ex",
		fr: "Farfuret ex",
		de: "Sniebel ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl Kopf zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Beat Up",
				fr: "Baston",
				de: "Prügler"
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play (including Sneasel ex). This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Pokémon que vous avez en jeu (Farfuret Ex inclus). Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				de: "Wirf eine Münze für jedes deiner Pokémon (einschließlich dieses Pokémon). Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl Kopf zu."
			},
			damage: "20x",

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
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275751,
		tcgplayer: 89374
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
