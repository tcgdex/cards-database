import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 100,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'énergie",
				'de-de': "Energy Stream"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Dialga.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Dialga.",
				'de-de': "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Dialga."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Diamond Blow",
				'fr-fr': "Coup diamant",
				'de-de': "Diamond Blow"
			},
			effect: {
				'en-us': "Dialga can't attack during your next turn.",
				'fr-fr': "Dialga ne peut pas attaquer lors de votre prochain tour.",
				'de-de': "Dialga can't attack during your next turn."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A legendary Pokémon of Sinnoh. It is said that time flows when Dialga's heart beats."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84802,
				cardmarket: 278426
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278426,
				tcgplayer: 84802
			}
		}
	],

}

export default card
