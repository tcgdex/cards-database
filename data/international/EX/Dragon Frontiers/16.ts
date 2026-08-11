import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Gligar δ",
		'fr-fr': "Scorplane δ",
		'de-de': "Skorgla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sting Turn",
				'fr-fr': "Tour piquant",
				'de-de': "Stacheltausch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and switch Gligar with 1 of your Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Échangez Scorplane avec 1 Pokémon de votre Banc.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt, tausche dann Skorgla gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Sting",
				'fr-fr': "Queue-dard",
				'de-de': "Schwanzstachel"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 10 more damage and the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
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


	retreat: 1,

	thirdParty: {
		cardmarket: 277221
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
