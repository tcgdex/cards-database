import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Owei",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Psychic Strategy",
				fr: "Stratégie psy",
			},
			effect: {
				en: "Each player counts the number of cards in his or her opponent's hand. Each player shuffles his or her hand into his or her deck. Then, each player draws a number of cards equal to the number of cards his or her opponent had.",
				fr: "Chaque joueur compte le nombre de cartes dans la main de son adversaire, Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche autant de cartes que son adversaire avait en main.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Eggsplosion",
				fr: "Super eggsplosion",
			},
			effect: {
				en: "Discard as many Energy cards as you like attached to your Pokémon. For each Energy card you discarded, flip a coin. This attack does 50 damage times the number of heads.",
				fr: "Défaussez autant de cartes Énergie attachées à votre Pokémon que vous le voulez. Pour chaque carte Énergie défaussée, lancez une pièce. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
