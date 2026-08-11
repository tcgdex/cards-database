import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [225],
	set: Set,

	name: {
		'en-us': "Delibird",
		'fr-fr': "Cadoizo",
		'es-es': "Delibird",
		'it-it': "Delibird",
		'pt-br': "Delibird",
		'de-de': "Botogel"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada",
			'de-de': "Eisiger Schnee"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'en-us': "Package Delivery",
			'fr-fr': "Livraison de Colis",
			'es-es': "Entrega de Paquetes",
			'it-it': "Consegna Pacchetto",
			'pt-br': "Encomenda",
			'de-de': "Paketlieferung"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your deck. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Ajoutez à votre deck ce Pokémon et toutes les cartes attachées. Dans ce cas, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja. Si lo haces, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Metti questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se lo fai, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele no seu baralho. Se fizer isto, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Lege dieses Pokémon und alle angelegten Karten in dein Deck. Wenn du das machst, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It has a generous habit of sharing its food with people and Pokémon, so it's always scrounging around for more food."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567112,
				tcgplayer: 241685
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 672376
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567112,
				tcgplayer: 241685
			}
		},
	],
}

export default card
