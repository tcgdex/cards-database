import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Lady",
		fr: "Mademoiselle",
		es: "Damisela",
		it: "Lady",
		pt: "Dama",
		de: "Lady"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 4 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a quattro carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 4 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674167
	}
}

export default card