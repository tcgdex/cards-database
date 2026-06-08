import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886439,
				tcgplayer: 693466
			}
		},
	],

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		'es-mx': "Claydol",
		de: "Lepumentas",
		it: "Claydol",
		pt: "Claydol"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [344],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Devolution Ray",
			fr: "Rayon Dés-Évoluant",
			es: "Rayo Involutivo",
			'es-mx': "Rayo Involutivo",
			de: "Rückentwicklungsstrahl",
			it: "Raggio di Involuzione",
			pt: "Raio da Involução"
		},

		cost: ["Fighting"],
		damage: 50,

		effect: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en ajoutant à la main de votre adversaire la carte Évolution la plus élevée placée sur lui.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, hazlo involucionar poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, hazlo involucionar poniendo la carta de Evolución de Fase más alta que esté sobre él en la mano de tu rival.",
			de: "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsphase auf die Hand gibst.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annullane l'evoluzione prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, involua-o colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card