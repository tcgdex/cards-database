import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Exeggutor",
		'fr-fr': "Noadkoko d’Alola",
		'es-es': "Exeggutor de Alola",
		'it-it': "Exeggutor di Alola",
		'pt-br': "Exeggutor de Alola",
		'de-de': "Alola-Kokowei"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Paradise Draw",
				'fr-fr': "Pioche Paradisiaque",
				'es-es': "Robo Paradisíaco",
				'it-it': "Pesca Paradisiaca",
				'pt-br': "Compra Paradisíaca",
				'de-de': "Paradieszug"
			},
			effect: {
				'en-us': "You may discard any number of cards from your hand. Then, draw cards until you have 6 cards in your hand.",
				'fr-fr': "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 6 cartes dans votre main.",
				'es-es': "Puedes descartar cualquier cantidad de cartas de tu mano. Después, roba cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Puoi scartare un numero qualsiasi di carte che hai in mano. Poi pesca fino ad avere sei carte in mano.",
				'pt-br': "Você pode descartar qualquer número de cartas da sua mão. Em seguida, compre cartas até ter 6 cartas na sua mão.",
				'de-de': "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe anschließend so lang Karten, bis du 6 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Egg Splat",
				'fr-fr': "Floc Œuf",
				'es-es': "Salpicadura Huevo",
				'it-it': "Caduta Uova",
				'pt-br': "Ovo Estatelado",
				'de-de': "Eierplatsch"
			},
			effect: {
				'en-us': "Discard any number of Exeggcute from your hand. This attack does 60 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez autant de Noeunoeuf que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de Exeggcute de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di Exeggcute che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer número de Exeggcute da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege beliebig viele Owei aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Exeggutor is the pride of the Alolan people. Its image is carved into historical buildings and murals.",
	},

	thirdParty: {
		cardmarket: 369042,
		tcgplayer: 183902
	}
}

export default card
