import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'es-es': "Dewgong",
		'it-it': "Dewgong",
		'de-de': "Jugong",
		'pt-br': "Dewgong",
		'ko-kr': "쥬레곤"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",

	dexId: [87],
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Seel"
	},

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'de-de': "Surfer",
			'pt-br': "Surfar",
			'ko-kr': "파도타기"
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		'en-us': "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
		'fr-fr': "Après manger, il s'étale de tout son long sur les plages\nde sable fin. Le soleil le réchauffe et facilite sa digestion.",
		'es-es': "Le gusta tenderse al sol en la playa\ndespués de comer, ya que aumentar su\ntemperatura corporal le facilita la digestión.",
		'it-it': "Dopo mangiato prende il sole sulla spiaggia\nper far aumentare la sua temperatura\ncorporea e favorire la digestione.",
		'de-de': "Nach einer Mahlzeit genießt es ein Sonnenbad\nam Strand. Durch die erhöhte Körpertemperatur\nwird seine Verdauung unterstützt.",
		'pt-br': "Toma sol na praia após as refeições.\nO aumento em sua temperatura\ncorporal ajuda na digestão.",
		'ko-kr': "식사 후에는 모래 해변에서\n일광욕을 하고 있다. 체온을\n높여서 소화를 돕기 위함이다."
	},

	boosters: ["pikachu"]
}

export default card
