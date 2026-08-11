import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex Niv. 40",
		'de-de': "Relaxo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [143],

	hp: 100,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Bad Sleeping Habits",
				'fr-fr': "Mauvaises habitudes de dodo",
				'de-de': "Üble Schlafgewohnheit"
			},
			effect: {
				'en-us': "As long as Snorlax is Asleep, your opponent's Active Pokémon can't retreat.",
				'fr-fr': "Tant que Ronflex est Endormi, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
				'de-de': "Solange Relaxo schläft, können sich Aktive Pokémon deines Gegners nicht zurückziehen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toss and Turn",
				'fr-fr': "Retournement",
				'de-de': "Herumwälzen"
			},
			effect: {
				'en-us': "If Snorlax is Asleep, this attack does 20 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
				'fr-fr': "Si Ronflex est Endormi, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Ronflex est Endormi.)",
				'de-de': "Wenn Relaxo schläft, fügt dieser Angriff 20 Schadenspunkte plus 30 weitere Schadenspunkte zu. (Dieser Angriff kann auch eingesetzt werden, wenn Relaxo schläft.)"
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Press",
				'fr-fr': "Lourde pression",
				'de-de': "Plattbügeln"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, Snorlax is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si c'est pile, Ronflex est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu. Bei \"Zahl\" schläft Relaxo jetzt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278655,
				tcgplayer: 89391
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278655,
				tcgplayer: 89391
			}
		},
	],

}

export default card
