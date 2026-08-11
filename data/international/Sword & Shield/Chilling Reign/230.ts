import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Welcoming Lantern",
		'fr-fr': "Lanterne Accueillante",
		'es-es': "Farolillo de Bienvenida",
		'it-it': "Lanterna di Benvenuto",
		'pt-br': "Lanterna Acolhedora",
		'de-de': "Einladende Laterne"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put a Single Strike Supporter card from your discard pile into your hand.",
		'fr-fr': "Ajoutez une carte Supporter Poing Final de votre pile de défausse à votre main.",
		'es-es': "Pon 1 carta de Partidario de Golpe Brusco de tu pila de descartes en tu mano.",
		'it-it': "Prendi una carta Aiuto Colpo Singolo dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		'pt-br': "Coloque uma carta de Apoiador Golpe Decisivo da sua pilha de descarte na sua mão.",
		'de-de': "Nimm 1 Fokussierter-Angriff-Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",


	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567338,
				tcgplayer: 241867
			}
		},
	],
}

export default card
