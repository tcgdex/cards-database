import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'de-de': "Elektek"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Punch",
				'de-de': "Boxhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoir Pokémon ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Die Schadenspunkte aus diesem Angriff werden von der Schwäche, Resistenz, Pokémon-Power oder allen anderen Effekten auf das verteidigende Pokémon nicht beeinflusst."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue.",
		'fr-fr': "De l'électricité parcourt son corps sous sa peau. Dans le noir, il brille d'un éclat bleu."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274433,
				tcgplayer: 85109
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274433,
				tcgplayer: 85109
			}
		}
	]
}

export default card
