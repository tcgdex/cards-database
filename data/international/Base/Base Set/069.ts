import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'de-de': "Hornliu",
		'it-it': "Weedle"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'de-de': "Giftstachel",
				'it-it': "Velenospina"
			},
			effect: {
				'en-us': "Flip a coin. If heads, Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Often found in forests, eating leaves. It has a sharp, venomous stinger on its head.",
		'fr-fr': "Il se nourrit de feuilles dans les forêts. L'aiguillon sur son front est empoisonné.",
		'it-it': "Lo si incontra spesso nei boschi dove si nutre di foglie. Ha sulla testa un pungiglione aguzzo e velenoso. LIV 12 N.13"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273764,
				tcgplayer: 42414
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107066
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107066
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
