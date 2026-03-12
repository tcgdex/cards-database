import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
		de: "Hundemon"
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
		en: "Houndour",
		fr: "Malosse"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lonesome",
				fr: "Solitaire",
				de: "Lonesome"
			},
			effect: {
				en: "As long as you have less Pokémon in play than your opponent, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
				fr: "Tant que vous avez moins de Pokémon en jeu que votre adversaire, il ou elle ne peut pas jouer de cartes Dresseur (cartes Supporter exclues) de sa main.",
				de: "As long as you have less Pokémon in play than your opponent, your opponent can't play Trainer cards (except for Supporter cards) from his or her hand."
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
				en: "Tight Jaw",
				fr: "Mâchoire serrée",
				de: "Tight Jaw"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard a Fire Energy attached to Houndoom.",
				fr: "Défaussez une Énergie  attachée à Demolosse.",
				de: "Discard a  Energy attached to Houndoom."
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

	thirdParty: {
		cardmarket: 276653,
		tcgplayer: 86206
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
