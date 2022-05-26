import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Trekking Shoes",
		fr: "Chaussures de Randonnée",
		es: "Botas de Expedición",
		it: "Scarpe da trekking",
		pt: "Tênis de Caminhada",
		de: "Trekkingschuhe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Look at the top card of your deck. You may put that card into your hand. If you don't, discard that card and draw a card.",
		fr: "Regardez la carte du dessus de votre deck. Vous pouvez ajouter cette carte à votre main. Sinon, défaussez cette carte et piochez une carte.",
		es: "Mira la primera carta de tu baraja. Puedes poner esa carta en tu mano. Si no lo haces, descarta esa carta y roba 1 carta.",
		it: "Guarda la prima carta del tuo mazzo. Puoi aggiungere quella carta a quelle che hai in mano. Se non lo fai, scarta quella carta e pescane una.",
		pt: "Olhe a carta de cima do seu baralho. Você pode colocar aquela carta na sua mão. Se não fizer isto, descarte aquela carta e compre 1 carta.",
		de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deine Hand nehmen. Wenn du das nicht machst, lege jene Karte auf deinen Ablagestapel und ziehe 1 Karte."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card