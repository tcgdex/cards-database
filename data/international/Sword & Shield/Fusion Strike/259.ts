import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dancer",
		'fr-fr': "Danseuse",
		'es-es': "Bailarina",
		'it-it': "Ballerina",
		'pt-br': "Dançarina",
		'de-de': "Tänzerin"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If you go second and it's your first turn, draw 3 more cards.",
		'fr-fr': "Piochez 2 cartes. Si vous jouez en second et que c'est votre premier tour, piochez 3 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si sales segundo y es tu primer turno, roba 3 cartas más.",
		'it-it': "Pesca due carte. Se inizi per secondo ed è il tuo primo turno, pesca altre tre carte.",
		'pt-br': "Compre 2 cartas. Se você for o segundo a jogar e este for o seu primeiro turno, compre 3 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe 3 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Yuu Nishida",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582996,
				tcgplayer: 253160
			}
		},
	],
}

export default card
