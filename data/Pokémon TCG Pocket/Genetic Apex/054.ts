import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		es: "Wartortle",
		it: "Wartortle",
		de: "Schillok",
		'pt-br': "Wartortle",
		ko: "어니부기"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Squirtle"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			de: "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			ko: "스플래시"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
		fr: "Il est considéré comme un symbole de longévité.\nOn reconnaît les spécimens les plus âgés\nà la mousse qui pousse sur leur carapace.",
		es: "Se lo considera un símbolo de longevidad.\nLos ejemplares más ancianos tienen\nmusgo sobre el caparazón.",
		it: "È considerato un simbolo di longevità. Se c'è del\nmuschio sul suo guscio, significa che è molto anziano.",
		de: "Es gilt als Symbol für Langlebigkeit.\nSehr alte Exemplare erkennt man daran,\ndass ihr Panzer mit Algen übersät ist.",
		'pt-br': "É um símbolo estabelecido de longevidade.\nSe seu casco possui algas, Wartortle é muito velho.",
		ko: "장수의 상징으로 여겨진다.\n등껍질에 이끼가 붙어 있는 것은\n특히 장수한 어니부기다."
	}
}

export default card
