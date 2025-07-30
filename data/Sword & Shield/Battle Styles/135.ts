import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Sordward & Shielbert",
		fr: "Jean-Fleuret et Jean-Targe",
		es: "Tizonio y Dargo",
		it: "Brandobaldo e Scudobaldo",
		pt: "Espadarnaldo e Escudoberto",
		de: "Schwerthold & Schildrich"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Choose a Trainer card from your discard pile. Then, ask your opponent if you may put it into your hand. If yes, put that card into your hand. If no, draw 3 cards.",
		fr: "Choisissez une carte Dresseur dans votre pile de défausse. Ensuite, demandez à votre adversaire si vous pouvez l'ajouter à votre main. Si oui, ajoutez cette carte à votre main. Sinon, piochez 3 cartes.",
		es: "Elige 1 carta de Entrenador de tu pila de descartes. Después, pregúntale a tu rival si puedes ponerla en tu mano. Si contesta que sí, pon esa carta en tu mano. Si contesta que no, roba 3 cartas.",
		it: "Scegli una carta Allenatore dalla tua pila degli scarti. Poi chiedi al tuo avversario se puoi aggiungerla a quelle che hai in mano. Se dice di sì, aggiungila alle carte che hai in mano. Se dice di no, pesca tre carte.",
		pt: "Escolha uma carta de Treinador da sua pilha de descarte. Em seguida, pergunte ao seu oponente se você pode colocá-la na sua mão. Se sim, coloque a carta na sua mão. Se não, compre 3 cartas.",
		de: "Wähle 1 Trainerkarte aus deinem Ablagestapel. Frage anschließend deinen Gegner, ob du sie auf deine Hand nehmen darfst. Wenn ja, nimm sie auf deine Hand. Wenn nein, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 545991
	}
}

export default card
