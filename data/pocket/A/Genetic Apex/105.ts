import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'de-de': "Elezeba",
		'pt-br': "Blitzle",
		'ko-kr': "줄뮤마"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	dexId: [522],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'de-de': "Stromtritt",
			'pt-br': "Chute Zap",
			'ko-kr': "일렉트릭킥"
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
		'en-us': "When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.",
		'fr-fr': "Il apparaît quand le ciel est à l'orage. Il capte les éclairs\navec sa crinière et accumule de l'électricité.",
		'es-es': "Aparece cuando nubes envueltas en\nrayos encapotan el cielo. Atrapa rayos\ncon su crin y almacena electricidad.",
		'it-it': "Appare quando il cielo si riempie di fulmini e saette.\nAccumula elettricità attirando i fulmini con la criniera.",
		'de-de': "Es erscheint, wenn Gewitterwolken den\nHimmel verdunkeln. Es fängt mit seiner\nMähne Blitze und hortet ihre Energie.",
		'pt-br': "Surge quando nuvens de tempestade cobrem\no céu. Pode capturar raios com sua crina e\narmazenar a eletricidade.",
		'ko-kr': "번개 구름이 하늘을 뒤덮으면\n나타난다. 갈기로 번개를\n붙잡아 전기를 모은다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
