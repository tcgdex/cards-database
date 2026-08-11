import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi",
		'de-de': "Minun"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [312],

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
				'en-us': "Minus Energy",
				'fr-fr': "Énergie moins",
				'de-de': "Minus Energy"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Energy attached to the Defending Pokémon. Your opponent returns that card to his or her hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 Énergie attachée au Pokémon Défenseur. Votre adversaire replace cette carte dans sa main.",
				'de-de': "Flip a coin. If heads, choose 1 Energy attached to the Defending Pokémon. Your opponent returns that card to his or her hand."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Thundershock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the defending Pokémon is now Paralyzed."
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
				tcgplayer: 87482,
				cardmarket: 276141
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87482,
				cardmarket: 276141
			}
		},
	]
}

export default card
