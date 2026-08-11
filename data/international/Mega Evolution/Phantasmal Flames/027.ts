import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'es-es': "Piplup",
		'es-mx': "Piplup",
		'de-de': "Plinfa",
		'it-it': "Piplup",
		'pt-br': "Piplup"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [393],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Support",
			'fr-fr': "Appel au Renfort",
			'es-es': "Buscar Apoyo",
			'es-mx': "Pedir Apoyo",
			'de-de': "Ruf nach Unterstützung",
			'it-it': "Cerca Aiuto",
			'pt-br': "Chamar Apoio"
		},

		effect: {
			'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'es-mx': "Tacleada",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
	},

	illustrator: "Hideki Ishikawa",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857602,
				tcgplayer: 662214,
				cardtrader: 356810
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857602,
				tcgplayer: 662214,
				cardtrader: 356810
			}
		},
	],
}

export default card
