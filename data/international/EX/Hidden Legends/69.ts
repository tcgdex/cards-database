import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'de-de': "Plusle"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [311],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plus Energy",
				'fr-fr': "Énergie plus",
				'de-de': "Plus Energy"
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach a Lightning Energy card from your hand to any of your Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie  de votre main à un de vos Pokémon.",
				'de-de': "Flip a coin. If heads, attach a  Energy card from your hand to any of your Pokémon."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de lumière",
				'de-de': "Dazzle Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88162,
				cardmarket: 276143
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88162,
				cardmarket: 276143
			}
		},
	]
}

export default card
