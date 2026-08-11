import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		'fr-fr': "Salamèche",
		'de-de': "Glumanda",
		'es-es': "Charmander",
		'pt-br': "Charmander",
		'it-it': "Charmander",
		'en-us': "Charmander"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Queue en Feu",
			'de-de': "Feuerspitze",
			'es-es': "Cola en Llamas",
			'pt-br': "Cauda em Chamas",
			'it-it': "Coda in Fiamme",
			'en-us': "Tail on Fire"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a {R} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	thirdParty: {
		cardmarket: 547031
	}
}

export default card
