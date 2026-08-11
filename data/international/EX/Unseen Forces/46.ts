import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Twin Play",
				'fr-fr': "Duo",
				'de-de': "Twin Play"
			},
			effect: {
				'en-us': "Search your deck for up to 2 in any combination of Scyther and Scyther ex and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 Insécateur et Insécateur ex, dans n'importe quelle combinaison, et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2 in any combination of Scyther and Scyther ex and put them onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Insécateur lors du prochain tour de votre adversaire.",
				'de-de': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther during your opponent's next turn."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88999,
				cardmarket: 276692
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88999,
				cardmarket: 276692
			},
		}
	],
}

export default card
