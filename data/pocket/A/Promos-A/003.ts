import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hand Scope",
		'fr-fr': "Scrute Main",
		'es-es': "Periscopio",
		'it-it': "Mirino Manuale",
		'de-de': "Handperiskop",
		'pt-br': "Luneta",
		'ko-kr': "핸드스코프"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent reveals their hand.",
		'fr-fr': "Votre adversaire dévoile sa main.",
		'es-es': "Tu rival enseña las cartas de su mano.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten.",
		'pt-br': "Seu oponente revela a mão dele.",
		'ko-kr': "상대의 패의 앞면을 모두 본다."
	},

	trainerType: "Item",
	boosters: []
}

export default card
