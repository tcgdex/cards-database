import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mountain Eater",
				'fr-fr': "Mange-montagne",
				'de-de': "Bergfresser"
			},
			effect: {
				'en-us': "Discard the top card of your deck. Then, remove 2 damage counters from Aron.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Ensuite, retirez 2 marqueurs de dégât à Galekid.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Entferne anschließend 2 Schadensmarken von Stollunior."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confront",
				'fr-fr': "Confrontation",
				'de-de': "Konfrontieren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it evolves, it sheds the steel carapace that covered its whole body and develops a new one."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83639,
				cardmarket: 279586
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279586,
				tcgplayer: 83639
			}
		},
	],

}

export default card
