import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		'en-us': "Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Warm Up",
			'fr-fr': "Étirement",
			'de-de': "Aufwärmung",
			'es-es': "Calentar",
			'pt-br': "Aquecer",
			'it-it': "Riscaldamento"
		},

		effect: {
			'en-us': "Search your deck for a {R} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia {R} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'it-it': "Fuoco Continuo"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582166,
				tcgplayer: 253129
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582166,
				tcgplayer: 253129
			}
		},
	],
}

export default card
