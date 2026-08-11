import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [265],
	set: Set,

	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Sting",
			'fr-fr': "Dard",
			'es-es': "Aguijonazo",
			'it-it': "Puntura",
			'pt-br': "Ferroada",
			'de-de': "Einstich"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'en-us': "Creepy-Crawly Congregation",
			'fr-fr': "Rassemblement Rampant",
			'es-es': "Congregación de Insectitos",
			'it-it': "Raduno Formicolante",
			'pt-br': "Reunião Rastejante",
			'de-de': "Kribbelkrabbelschar"
		},

		effect: {
			'en-us': "Search your deck for any number of Wurmple, Silcoon, Beautifly, Cascoon, and Dustox, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck autant de Chenipotte, Armulys, Charmillon, Blindalys et Papinox que vous voulez, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja cualquier cantidad de Wurmple, Silcoon, Beautifly, Cascoon y Dustox, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un numero qualsiasi di Wurmple, Silcoon, Beautifly, Cascoon e Dustox, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por qualquer número de Wurmple, Silcoon, Beautifly, Cascoon e Dustox no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach beliebig vielen Waumpel, Schaloko, Papinella, Panekon und Pudox, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674017,
				tcgplayer: 283870
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674017,
				tcgplayer: 283870
			}
		},
	],
}

export default card
