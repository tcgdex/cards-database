import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Welcoming Lantern",
		fr: "Lanterne Accueillante",
		es: "Farolillo de Bienvenida",
		it: "Lanterna di Benvenuto",
		pt: "Lanterna Acolhedora",
		de: "Einladende Laterne"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Put a Single Strike Supporter card from your discard pile into your hand.",
		fr: "Ajoutez une carte Supporter Poing Final de votre pile de défausse à votre main.",
		es: "Pon 1 carta de Partidario de Golpe Brusco de tu pila de descartes en tu mano.",
		it: "Prendi una carta Aiuto Colpo Singolo dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		pt: "Coloque uma carta de Apoiador Golpe Decisivo da sua pilha de descarte na sua mão.",
		de: "Nimm 1 Fokussierter-Angriff-Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card