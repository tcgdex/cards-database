import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		de: "Tentacha",
		'pt-br': "Tentacool",
		ko: "왕눈해"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
		fr: "Peu doué pour la natation, ce Pokémon\nse contente de flotter à la surface des eaux\npeu profondes pour chasser ses proies.",
		es: "Sus facultades natatorias son más bien escasas,\npor lo que se limita a flotar a la deriva en\naguas poco profundas en busca de alimento.",
		it: "Non essendo molto abile a nuotare, va in cerca\ndi prede fluttuando in acque poco profonde.",
		de: "Da Tentacha kein besonders guter Schwimmer ist,\ntreibt es in seichten Gewässern an der\nWasseroberfläche und sucht nach Beute.",
		'pt-br': "Tentacool não nada particularmente bem.\nFlutua pela superfície de águas rasas\nenquanto procura por sua presa.",
		ko: "헤엄치는 힘은 강하지 않다.\n얕은 바다 수면을 떠다니면서\n먹이를 찾는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			de: "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			ko: "물뿌리기"
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