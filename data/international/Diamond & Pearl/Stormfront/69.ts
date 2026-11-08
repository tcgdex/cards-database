import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'fr-fr': "Onix",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
				'de-de': "Härtner"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Onix would be damaged by an attack, prevent that attack's damage done to Onix if that damage is 40 or less.",
				'fr-fr': "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Onix, prévenez ces dégâts s'ils sont de 40 ou moins.",
				'de-de': "Wenn Onix während des nächsten Zuges deines Gegners durch einen Angriff 40 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Fighting",
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
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When it travels underground, it causes rumbling and tremors. It can move at 50 mph.",
		'fr-fr': "Il provoque des secousses sismiques en creusant. Il peut atteindre les 80 km/h."
	},

	thirdParty: {
		cardmarket: 278367,
		tcgplayer: 87883
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
