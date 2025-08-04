import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Capturing Aroma",
		fr: "Arôme Captivant",
		es: "Aroma Embriagador",
		it: "Catturaroma",
		pt: "Aroma Cativante",
		de: "Ergreifendes Aroma"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, search your deck for an Evolution Pokémon, reveal it, and put it into your hand. If tails, search your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon Évolutif, montrez-le, puis ajoutez-le à votre main. Si c'est pile, cherchez dans votre deck un Pokémon de base, montrez-le, et ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon Evolución, enséñalo y ponlo en tu mano. Si sale cruz, busca en tu baraja 1 Pokémon Básico, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon Evoluzione, mostralo e aggiungilo alle carte che hai in mano. Se esce croce, cerca nel tuo mazzo un Pokémon Base, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Jogue 1 moeda. Se sair cara, procure por 1 Pokémon de Evolução no seu baralho, revele-o e coloque-o na sua mão. Se sair coroa, procure por 1 Pokémon Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Entwicklungs-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Durchsuche bei Zahl dein Deck nach 1 Basis-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682200,
		tcgplayer: 451801
	}
}

export default card