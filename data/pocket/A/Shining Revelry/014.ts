import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'de-de': "Tentacha",
		'pt-br': "Tentacool",
		'ko-kr': "왕눈해"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [72],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
		'fr-fr': "Peu doué pour la natation, ce Pokémon\nse contente de flotter à la surface des eaux\npeu profondes pour chasser ses proies.",
		'es-es': "Sus facultades natatorias son más bien escasas,\npor lo que se limita a flotar a la deriva en\naguas poco profundas en busca de alimento.",
		'it-it': "Non essendo molto abile a nuotare, va in cerca\ndi prede fluttuando in acque poco profonde.",
		'de-de': "Da Tentacha kein besonders guter Schwimmer ist,\ntreibt es in seichten Gewässern an der\nWasseroberfläche und sucht nach Beute.",
		'pt-br': "Tentacool não nada particularmente bem.\nFlutua pela superfície de águas rasas\nenquanto procura por sua presa.",
		'ko-kr': "헤엄치는 힘은 강하지 않다.\n얕은 바다 수면을 떠다니면서\n먹이를 찾는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'de-de': "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			'ko-kr': "물뿌리기"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card