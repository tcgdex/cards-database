import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bruxish",
		'fr-fr': "Denticrisse",
		'es-es': "Bruxish",
		'it-it': "Bruxish",
		'de-de': "Knirfish",
		'pt-br': "Bruxish",
		'ko-kr': "치갈기"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [779],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
		'fr-fr': "Ce Pokémon grince fortement des dents afin de\nstimuler son cerveau. Il projette ensuite l'énergie\npsychique ainsi créée par l'appendice sur sa tête.",
		'es-es': "Estimula su cerebro al rechinar los dientes con\nfuerza. Libera el poder psíquico que genera\npor la protuberancia que tiene en la cabeza.",
		'it-it': "Fa stridere i denti per stimolare il proprio\ncervello e creare così onde psichiche, che\npoi emette dalla protuberanza sulla testa.",
		'de-de': "Es knirscht stark mit den Zähnen, um sein Gehirn\nzu stimulieren. Die dabei erzeugten Psycho-Kräfte\nsetzt es über den Fortsatz an seinem Kopf frei.",
		'pt-br': "Range os dentes com muita força para estimular\no seu cérebro. Lança energia psíquica criada durante\neste processo pela protuberância em sua cabeça.",
		'ko-kr': "강하게 이를 갈아서 뇌를 자극한다.\n이를 통해 만들어 낸 사이코 파워를\n머리의 돌기를 통해 발사한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'de-de': "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			'ko-kr': "스플래시"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card