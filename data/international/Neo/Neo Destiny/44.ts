import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'de-de': "Pummeluff"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Pousstoidla",
				'de-de': "Expand"
			},
			effect: {
				'en-us': "All damage done to Jigglypuff during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Rondoudou pendant le prochain tour de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "All damage done to Jigglypuff during your opponent´s next turn is reduced by 10 (after applying Weakness and Resistance)."
			},
			damage: 10,

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


	description: {
		'en-us': "If puffs its body up like a balloon and sings a lullaby that makes all who hear it fall into a deep sleep.",
		'fr-fr': "Il gonfle son corps comme un ballon et chante une berceuse qui fait sombrer tous ceux qui l'entendent dans un profond sommeil."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274696,
				tcgplayer: 86311
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274696,
				tcgplayer: 86311
			}
		}
	]
}

export default card
