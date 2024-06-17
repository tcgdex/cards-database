import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [265],
	set: Set,

	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		it: "Wurmple",
		pt: "Wurmple",
		de: "Waumpel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sting",
			fr: "Dard",
			es: "Aguijonazo",
			it: "Puntura",
			pt: "Ferroada",
			de: "Einstich"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Creepy-Crawly Congregation",
			fr: "Rassemblement Rampant",
			es: "Congregación de Insectitos",
			it: "Raduno Formicolante",
			pt: "Reunião Rastejante",
			de: "Kribbelkrabbelschar"
		},

		effect: {
			en: "Search your deck for any number of Wurmple, Silcoon, Beautifly, Cascoon, and Dustox, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck autant de Chenipotte, Armulys, Charmillon, Blindalys et Papinox que vous voulez, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja cualquier cantidad de Wurmple, Silcoon, Beautifly, Cascoon y Dustox, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un numero qualsiasi di Wurmple, Silcoon, Beautifly, Cascoon e Dustox, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por qualquer número de Wurmple, Silcoon, Beautifly, Cascoon e Dustox no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach beliebig vielen Waumpel, Schaloko, Papinella, Panekon und Pudox, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
