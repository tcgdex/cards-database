import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Dancer",
		fr: "Danseuse",
		es: "Bailarina",
		it: "Ballerina",
		pt: "Dançarina",
		de: "Tänzerin"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If you go second and it's your first turn, draw 3 more cards.",
		fr: "Piochez 2 cartes. Si vous jouez en second et que c'est votre premier tour, piochez 3 cartes supplémentaires.",
		es: "Roba 2 cartas. Si sales segundo y es tu primer turno, roba 3 cartas más.",
		it: "Pesca due carte. Se inizi per secondo ed è il tuo primo turno, pesca altre tre carte.",
		pt: "Compre 2 cartas. Se você for o segundo a jogar e este for o seu primeiro turno, compre 3 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe 3 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582968
	}
}

export default card