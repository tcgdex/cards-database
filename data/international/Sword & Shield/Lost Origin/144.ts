import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mischievous Tail",
			'fr-fr': "Queue Malicieuse",
			'es-es': "Cola Traviesa",
			'it-it': "Coda Birichina",
			'pt-br': "Cauda Maliciosa",
			'de-de': "Frecher Schweif"
		},

		effect: {
			'en-us': "Look at the top card of your opponent's deck. You may have your opponent shuffle their deck.",
			'fr-fr': "Regardez la carte du dessus du deck de votre adversaire. Vous pouvez demander à votre adversaire de mélanger son deck.",
			'es-es': "Mira la primera carta de la baraja de tu rival. Puedes hacer que tu rival baraje las cartas de su baraja.",
			'it-it': "Guarda la prima carta del mazzo del tuo avversario. Puoi far rimischiare il suo mazzo al tuo avversario.",
			'pt-br': "Olhe a carta de cima do baralho do seu oponente. Você pode fazer com que o seu oponente embaralhe o próprio baralho.",
			'de-de': "Schau dir die oberste Karte des Decks deines Gegners an. Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674154,
				tcgplayer: 284070
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674154,
				tcgplayer: 284070
			}
		},
	],
}

export default card
