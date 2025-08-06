import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Kubfu",
		fr: "Wushours",
		es: "Kubfu",
		it: "Kubfu",
		pt: "Kubfu",
		de: "Dakuma"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Training",
			fr: "Entraînement",
			es: "Entrenamiento",
			it: "Allenamento",
			pt: "Treinamento",
			de: "Training"
		},

		effect: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Elbow Strike",
			fr: "Coup de Coude",
			es: "Codazo",
			it: "Colpogomito",
			pt: "Golpe de Cotovelo",
			de: "Ellbogenstoß"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly."
	},

	thirdParty: {
		cardmarket: 567201,
		tcgplayer: 241762
	}
}

export default card