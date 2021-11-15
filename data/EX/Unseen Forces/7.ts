import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse"
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
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lonesome",
				fr: "Solitaire"
			},
			effect: {
				en: "As long as you have less Pokémon in play than your opponent, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
				fr: "Tant que vous avez moins de Pokémon en jeu que votre adversaire, il ou elle ne peut pas jouer de cartes Dresseur (cartes Supporter exclues) de sa main."
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
				fr: "Mâchoire serrée"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
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
				fr: "Lance-flamme"
			},
			effect: {
				en: "Discard a Fire Energy attached to Houndoom.",
				fr: "Défaussez une Énergie  attachée à Demolosse."
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





}

export default card
