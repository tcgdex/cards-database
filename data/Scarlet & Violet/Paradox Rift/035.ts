import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Drawup Power",
			fr: "Pouvoir Bloquant",
			es: "Extraer Poder",
			it: "Prelievo Energetico",
			pt: "Poder de Içamento",
			de: "Kraft aufziehen"
		},

		effect: {
			en: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card