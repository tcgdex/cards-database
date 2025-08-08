import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		pt: "Pikachu",
		it: "Pikachu",
		en: "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Livraison de Cadeaux",
			de: "Geschenklieferung",
			es: "Entrega de Regalo",
			pt: "Entrega de Presente",
			it: "Consegna Dono",
			en: "Gift Delivery"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Jogue 1 moeda. Se sair cara, procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Flip a coin. If heads, search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Pika Ball",
			de: "Pikaball",
			es: "Pika Ball",
			pt: "Bola Pikachu",
			it: "Pikasfera",
			en: "Pika Ball"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	}
}

export default card