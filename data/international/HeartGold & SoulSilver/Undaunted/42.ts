import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 50,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-son",
				'de-de': "Metallsound"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’boule",
				'de-de': "Kopfnuss"
			},

			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "When it evolves, it sheds the steel carapace that covered its whole body and develops a new one."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279295,
				tcgplayer: 83638
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279295,
				tcgplayer: 83638
			}
		}
	],

}

export default card
