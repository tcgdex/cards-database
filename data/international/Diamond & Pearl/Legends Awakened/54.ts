import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
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
		'en-us': "Exeggcute",
		'fr-fr': "Owei",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Psychic Strategy",
				'fr-fr': "Stratégie psy",
				'de-de': "Psycho-Strategie"
			},
			effect: {
				'en-us': "Each player counts the number of cards in his or her opponent's hand. Each player shuffles his or her hand into his or her deck. Then, each player draws a number of cards equal to the number of cards his or her opponent had.",
				'fr-fr': "Chaque joueur compte le nombre de cartes dans la main de son adversaire, Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche autant de cartes que son adversaire avait en main.",
				'de-de': "Jeder Spieler zählt die Anzahl der Karten auf der Hand seines Gegners. Jeder Spieler mischt seine Handkarten in sein Deck. Danach zieht jeder Spieler ebenso viele Karten, wie sein Gegner auf der Hand hatte. (Du ziehst zuerst.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Super Eggsplosion",
				'fr-fr': "Super eggsplosion",
				'de-de': "Super-Eggsplosion"
			},
			effect: {
				'en-us': "Discard as many Energy cards as you like attached to your Pokémon. For each Energy card you discarded, flip a coin. This attack does 50 damage times the number of heads.",
				'fr-fr': "Défaussez autant de cartes Énergie attachées à votre Pokémon que vous le voulez. Pour chaque carte Énergie défaussée, lancez une pièce. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Du kannst beliebig viele Energiekarten von deinen Pokémon entfernen und auf deinen Ablagestapel legen. Wirf für jede auf diese Weise auf den Ablagestapel gelegte Energiekarte 1 Münze. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is called \"The Walking Jungle.\" If a head grows too big, it falls off and becomes an Exeggcute.",
		'fr-fr': "On l'appelle \"jungle sur pattes\". Si une tête devient trop grosse, elle tombe et produit un NOEUNOEUF."
	},

	thirdParty: {
		cardmarket: 278203,
		tcgplayer: 85361
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
