import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stoke",
			'fr-fr': "Attisement",
			'es-es': "Atizador",
			'it-it': "Attizzatoio",
			'pt-br': "Carregar",
			'de-de': "Anheizen"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {R} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {R} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {R} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {R} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {R} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{R}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'es-es': "Garras de Fuego",
			'it-it': "Artigli Infuocati",
			'pt-br': "Garras de Fogo",
			'de-de': "Feuerkrallen"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Uta",
	description: {
		'en-us': "It's very friendly and faithful to people. It will try to repel enemies by barking and biting.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 703192,
				tcgplayer: 500563
			},
		}
	],
}

export default card
