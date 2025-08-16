import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [720],
	set: Set,

	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa",
		de: "Hoopa"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Hand of Djinn",
			fr: "Main du Djinn",
			es: "Mano del Genio Burlón",
			it: "Mano del Genio",
			pt: "Mão de Gênio",
			de: "Hand des Plagegeists"
		},

		effect: {
			en: "Search your deck for a Darkness Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Darkness, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Darkness y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Darkness e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia Darkness no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Darkness-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Tyrannical Hole",
			fr: "Trou Tyrannique",
			es: "Agujero Tiránico",
			it: "Voragine Tirannica",
			pt: "Buraco de Tirano",
			de: "Despotischer Schlund"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674135,
		tcgplayer: 284030
	}
}

export default card