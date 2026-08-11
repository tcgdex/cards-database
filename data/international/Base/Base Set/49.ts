import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'de-de': "Traumato",
		'it-it': "Drowzee"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras' Face",
				'de-de': "Pfund",
				'it-it': "Libbra"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
				'de-de': "Konfustrahl",
				'it-it': "Stordiraggio"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon verwirrt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso.",
			},
			damage: 10,

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
		'en-us': "Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating bad dreams.",
		'fr-fr': "Il endort ses ennemis et dévore leurs songes. En mangeant de mauvais rêves, il devient malade.",
		'it-it': "Addormenta i suoi nemici e poi mangia i loro sogni. A volte si sente male dopo aver mangiato dei brutti sogni. LIV 12 N.96",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273744,
				tcgplayer: 42392
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107046
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107046
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
