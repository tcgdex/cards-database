import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Fang",
				'fr-fr': "Croc intimidant",
				'de-de': "Intimidating Fang"
			},
			effect: {
				'en-us': "As long as Granbull is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Granbull est votre Pokémon Actif, les dégâts qui sont infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Granbull is your Active Pokémon, any damage done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crushing Blow",
				'fr-fr': "Coup écrasant",
				'de-de': "Crushing Blow"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Lariat",
				'fr-fr': "Double lasso",
				'de-de': "Double Lariat"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 50 damage times the number of heads."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85863,
				cardmarket: 276685
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85863,
				cardmarket: 276685
			},
		}
	],
}

export default card
