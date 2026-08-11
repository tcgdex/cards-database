import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu",
		'de-de': "Pikachu",
		'es-es': "Pikachu",
		'pt-br': "Pikachu",
		'it-it': "Pikachu",
		'en-us': "Pikachu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Livraison de Cadeaux",
			'de-de': "Geschenklieferung",
			'es-es': "Entrega de Regalo",
			'pt-br': "Entrega de Presente",
			'it-it': "Consegna Dono",
			'en-us': "Gift Delivery"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Flip a coin. If heads, search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pika Ball",
			'de-de': "Pikaball",
			'es-es': "Pika Ball",
			'pt-br': "Bola Pikachu",
			'it-it': "Pikasfera",
			'en-us': "Pika Ball"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	thirdParty: {
		cardmarket: 461594,
		tcgplayer: 277039
	}
}

export default card
