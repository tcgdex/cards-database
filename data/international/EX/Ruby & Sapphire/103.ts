import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Sneasel ex",
		'fr-fr': "Farfuret ex",
		'de-de': "Sniebel ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [215],

	hp: 80,

	stage: "Basic",
	types: [
		"Darkness"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl Kopf zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Beat Up",
				'fr-fr': "Baston",
				'de-de': "Prügler"
			},
			effect: {
				'en-us': "Flip a coin for each of your Pokémon in play (including Sneasel ex). This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Pokémon que vous avez en jeu (Farfuret Ex inclus). Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf eine Münze für jedes deiner Pokémon (einschließlich dieses Pokémon). Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl Kopf zu."
			},
			damage: "20×",

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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89374,
				cardmarket: 275751
			}
		}
	]
}

export default card
