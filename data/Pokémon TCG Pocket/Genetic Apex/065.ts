import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		it: "Dewgong",
		de: "Jugong",
		'pt-br': "Dewgong",
		ko: "쥬레곤"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			de: "Surfer",
			'pt-br': "Surfar",
			ko: "파도타기"
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
		en: "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
		fr: "Après manger, il s'étale de tout son long sur les plages\nde sable fin. Le soleil le réchauffe et facilite sa digestion.",
		es: "Le gusta tenderse al sol en la playa\ndespués de comer, ya que aumentar su\ntemperatura corporal le facilita la digestión.",
		it: "Dopo mangiato prende il sole sulla spiaggia\nper far aumentare la sua temperatura\ncorporea e favorire la digestione.",
		de: "Nach einer Mahlzeit genießt es ein Sonnenbad\nam Strand. Durch die erhöhte Körpertemperatur\nwird seine Verdauung unterstützt.",
		'pt-br': "Toma sol na praia após as refeições.\nO aumento em sua temperatura\ncorporal ajuda na digestão.",
		ko: "식사 후에는 모래 해변에서\n일광욕을 하고 있다. 체온을\n높여서 소화를 돕기 위함이다."
	},

	boosters: ["pikachu"]
}

export default card
