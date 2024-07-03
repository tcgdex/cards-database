import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Boxed Order",
		fr: "Commande Emballée",
		es: "Caja de Envío",
		it: "Ordinazione Speciale",
		pt: "Pedido Encaixotado",
		de: "Verpackte Bestellung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. Your turn ends.",
		fr: "Cherchez dans votre deck jusqu'à 2 cartes Objet, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. Votre tour se termine.",
		es: "Busca en tu baraja hasta 2 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja. Tu turno termina.",
		it: "Cerca nel tuo mazzo fino a due carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Il tuo turno finisce.",
		pt: "Procure por até 2 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho. O seu turno acaba.",
		de: "Durchsuche dein Deck nach bis zu 2 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. Dein Zug endet."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card