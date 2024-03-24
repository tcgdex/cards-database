import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Wooper",
		fr: "Axoloto de Paldea",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Home",
			fr: "Recherche de Foyer",
			es: "Buscar un Hogar",
			it: "Trovadimora",
			pt: "Encontrar um Lar"
		},

		effect: {
			en: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card