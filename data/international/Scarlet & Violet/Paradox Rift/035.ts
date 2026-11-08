import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [349],
	set: Set,

	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Drawup Power",
			'fr-fr': "Pouvoir Bloquant",
			'es-es': "Extraer Poder",
			'it-it': "Prelievo Energetico",
			'pt-br': "Poder de Içamento",
			'de-de': "Kraft aufziehen"
		},

		effect: {
			'en-us': "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is a shabby and ugly Pokémon. However, it is very hardy and can survive on little water.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740511,
				tcgplayer: 523644,
				cardtrader: 265166
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740511,
				tcgplayer: 523644,
				cardtrader: 265166
			}
		},
	],

	illustrator: "Tetsu Kayama",

	
}

export default card
