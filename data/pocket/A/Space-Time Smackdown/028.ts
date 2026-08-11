import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'de-de': "Panpyro",
		'pt-br': "Monferno",
		'ko-kr': "파이숭이"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [391],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Chimchar"
	},

	description: {
		'en-us': "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
		'fr-fr': "Il contrôle habilement l'intensité de la flamme\nde sa queue pour maintenir une distance idéale\nentre lui et ses adversaires lors des combats.",
		'es-es': "Controla hábilmente la intensidad del fuego de la cola\npara mantener al enemigo a una distancia ideal.",
		'it-it': "Controlla abilmente l'intensità delle fiamme sulla\nsua coda per tenere i nemici alla distanza ideale.",
		'de-de': "Es kontrolliert die Stärke des Feuers an seinem Schweif\ngeschickt, um Gegner auf idealer Distanz zu halten.",
		'pt-br': "Controla habilmente a intensidade do fogo em sua cauda\npara manter seus inimigos a uma distância ideal.",
		'ko-kr': "꼬리의 불꽃 세기를\n잘 컨트롤하여 자신에게\n맞는 거리를 두고 싸운다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fiery Punch",
			'fr-fr': "Poing de Feu",
			'es-es': "Puño Ardiente",
			'it-it': "Pugnodifuoco",
			'de-de': "Flammenschlag",
			'pt-br': "Soco Ardente",
			'ko-kr': "불꽃튀는펀치"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
