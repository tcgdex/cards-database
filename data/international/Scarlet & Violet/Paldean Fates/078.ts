import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clive",
		'fr-fr': "Clove",
		'es-es': "Cael",
		'it-it': "Garoff",
		'pt-br': "Clive",
		'de-de': "Leval"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent reveals their hand, and you draw 2 cards for each Supporter card you find there.",
		'fr-fr': "Votre adversaire montre sa main et vous piochez 2 cartes pour chaque carte Supporter que vous y trouvez.",
		'es-es': "Tu rival enseña las cartas de su mano, y tú robas 2 cartas por cada carta de Partidario que encuentres entre ellas.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano e tu peschi due carte per ogni carta Aiuto presente tra quelle carte.",
		'pt-br': "Seu oponente revela a mão dele e você compra 2 cartas para cada carta de Apoiador que encontrar lá.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten und du ziehst 2 Karten für jede Unterstützerkarte, die du dort findest."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751616,
				tcgplayer: 534440,
				cardtrader: 274262
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751616,
				tcgplayer: 534440,
				cardtrader: 274262
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
