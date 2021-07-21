import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
		es: "Exeggutor de Alola",
		it: "Exeggutor di Alola",
		pt: "Exeggutor de Alola",
		de: "Alola-Kokowei"
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
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Paradise Draw",
				fr: "Pioche Paradisiaque",
				es: "Robo Paradisíaco",
				it: "Pesca Paradisiaca",
				pt: "Compra Paradisíaca",
				de: "Paradieszug"
			},
			effect: {
				en: "You may discard any number of cards from your hand. Then, draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 6 cartes dans votre main.",
				es: "Puedes descartar cualquier cantidad de cartas de tu mano. Después, roba cartas hasta que tengas 6 cartas en tu mano.",
				it: "Puoi scartare un numero qualsiasi di carte che hai in mano. Poi pesca fino ad avere sei carte in mano.",
				pt: "Você pode descartar qualquer número de cartas da sua mão. Em seguida, compre cartas até ter 6 cartas na sua mão.",
				de: "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe anschließend so lang Karten, bis du 6 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Egg Splat",
				fr: "Floc Œuf",
				es: "Salpicadura Huevo",
				it: "Caduta Uova",
				pt: "Ovo Estatelado",
				de: "Eierplatsch"
			},
			effect: {
				en: "Discard any number of Exeggcute from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez autant de Noeunoeuf que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de Exeggcute de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di Exeggcute che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer número de Exeggcute da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Owei aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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



}

export default card
