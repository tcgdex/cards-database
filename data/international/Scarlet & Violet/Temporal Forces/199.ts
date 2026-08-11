import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eri",
		'fr-fr': "Nèflie",
		'es-es': "Erin",
		'it-it': "Nespera",
		'pt-br': "Êri",
		'de-de': "Rioba"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent reveals their hand, and you discard up to 2 Item cards you find there.",
		'fr-fr': "Votre adversaire montre sa main et vous défaussez jusqu'à 2 cartes Objet que vous y trouvez.",
		'es-es': "Tu rival enseña las cartas de su mano, y tú descartas hasta 2 cartas de Objeto que encuentres entre ellas.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano e tu scarti fino a due carte Strumento presenti tra quelle carte.",
		'pt-br': "Seu oponente revela a mão dele e você descarta até 2 cartas de Item que encontrar lá.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten und du legst bis zu 2 Itemkarten, die du dort findest, auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760829,
				tcgplayer: 542920
			}
		},
	],

	illustrator: "GOSSAN",

}

export default card