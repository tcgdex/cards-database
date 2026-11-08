import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'de-de': "Wadribie"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [415],

	hp: 30,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Enraged Assault",
				'fr-fr': "Assaut furieux",
				'de-de': "Wutansturm"
			},
			effect: {
				'en-us': "If Vespiquen is on your Bench and has any damage counters on it, this attack does 20 damage plus 60 more damage and the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si Apireine se trouve sur votre Banc et a des marqueurs de dégât, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wenn sich Honweisel auf deiner Bank befindet und mindestens 1 Schadensmarke auf ihm liegt, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: "20+",

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
		'en-us': "At night, Combee sleep in a group of about a thousand, packed closely together in a lump."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279297,
				tcgplayer: 84397
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279297,
				tcgplayer: 84397
			}
		}
	],

}

export default card
