import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Blitzle",
		fr: "Zébibron",
		es: "Blitzle",
		it: "Blitzle",
		de: "Elezeba",
		'pt-br': "Blitzle",
		ko: "줄뮤마"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			de: "Stromtritt",
			'pt-br': "Chute Zap",
			ko: "일렉트릭킥"
		},

		damage: "20"

	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.",
		fr: "Il apparaît quand le ciel est à l'orage. Il capte les éclairs\navec sa crinière et accumule de l'électricité.",
		es: "Aparece cuando nubes envueltas en\nrayos encapotan el cielo. Atrapa rayos\ncon su crin y almacena electricidad.",
		it: "Appare quando il cielo si riempie di fulmini e saette.\nAccumula elettricità attirando i fulmini con la criniera.",
		de: "Es erscheint, wenn Gewitterwolken den\nHimmel verdunkeln. Es fängt mit seiner\nMähne Blitze und hortet ihre Energie.",
		'pt-br': "Surge quando nuvens de tempestade cobrem\no céu. Pode capturar raios com sua crina e\narmazenar a eletricidade.",
		ko: "번개 구름이 하늘을 뒤덮으면\n나타난다. 갈기로 번개를\n붙잡아 전기를 모은다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
