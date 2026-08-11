import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Flame Charge",
			'fr-fr': "Nitrocharge",
			'es-es': "Nitrocarga",
			'it-it': "Nitrocarica",
			'pt-br': "Ataque de Chamas",
			'de-de': "Nitroladung"
		},

		effect: {
			'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It protects itself with flame. Long years ago, people believed Larvesta had a nest on the sun."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567103,
				tcgplayer: 241675
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567103,
				tcgplayer: 241675
			}
		},
	],
}

export default card
