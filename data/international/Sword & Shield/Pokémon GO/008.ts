import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Tail on Fire",
			'fr-fr': "Queue en Feu",
			'es-es': "Cola en Llamas",
			'it-it': "Coda in Fiamme",
			'pt-br': "Cauda em Chamas",
			'de-de': "Feuerspitze"
		},

		effect: {
			'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
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
		'en-us': "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665242,
				tcgplayer: 274436
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665242,
				tcgplayer: 274436
			}
		},
	],
}

export default card
