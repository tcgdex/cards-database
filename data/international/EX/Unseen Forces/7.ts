import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Demolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lonesome",
				'fr-fr': "Solitaire",
				'de-de': "Lonesome"
			},
			effect: {
				'en-us': "As long as you have less Pokémon in play than your opponent, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
				'fr-fr': "Tant que vous avez moins de Pokémon en jeu que votre adversaire, il ou elle ne peut pas jouer de cartes Dresseur (cartes Supporter exclues) de sa main.",
				'de-de': "As long as you have less Pokémon in play than your opponent, your opponent can't play Trainer cards (except for Supporter cards) from his or her hand."
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
				'en-us': "Tight Jaw",
				'fr-fr': "Mâchoire serrée",
				'de-de': "Tight Jaw"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Houndoom.",
				'fr-fr': "Défaussez une Énergie  attachée à Demolosse.",
				'de-de': "Discard a  Energy attached to Houndoom."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86206,
				cardmarket: 276653
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86206,
				cardmarket: 276653
			},
		}
	],
}

export default card
