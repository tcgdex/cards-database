import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [95],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
				'de-de': "Klammergriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Onix.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Onix.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Onix zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275848,
				tcgplayer: 87876
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275848,
				tcgplayer: 87876
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125157
			}
		},
	],

}

export default card
