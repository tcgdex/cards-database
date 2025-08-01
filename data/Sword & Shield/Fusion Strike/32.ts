import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Warm Up",
			fr: "Étirement",
			de: "Aufwärmung",
			es: "Calentar",
			pt: "Aquecer",
			it: "Riscaldamento"
		},

		effect: {
			en: "Search your deck for a {R} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {R} y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia {R} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			es: "Combustión",
			pt: "Combustão",
			it: "Fuoco Continuo"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582166
	}
}

export default card