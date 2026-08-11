import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Roserade C",
		'fr-fr': "Roserade ",
		'de-de': "Roserade C"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [407],
	hp: 90,
	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Natural Cure",
				'fr-fr': "Remède naturel",
				'de-de': "Innere Kraft"
			},
			effect: {
				'en-us': "When you attach an Energy card from your hand to Roserade C, remove all Special Conditions from Roserade C.",
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à Roserade , retirez-lui tous ses États Spéciaux.",
				'de-de': "Wenn du 1 Energiekarte von deiner Hand an Roserade C anlegst, entferne alle Speziellen Zustände von Roserade C."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuillemagik",
				'de-de': "Zauberblatt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage and remove 2 damage counters from Roserade C.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires tout en retirant 2 marqueurs de dégât à Roserade .",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und entferne 2 Schadensmarken von Roserade C."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278731,
				tcgplayer: 88833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278731,
				tcgplayer: 88833
			}
		},
	],

}

export default card
