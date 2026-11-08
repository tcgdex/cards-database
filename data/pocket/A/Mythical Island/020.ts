import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'de-de': "Finneon",
		'pt-br': "Finneon",
		'ko-kr': "형광어"
	},

	illustrator: "sui",
	category: "Pokemon",

	dexId: [456],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The line running down its side can store sunlight. It shines vividly at night.",
		'fr-fr': "La ligne qui fait le tour de son corps emmagasine\nl'énergie solaire et brille intensément la nuit.",
		'es-es': "La línea que le recorre el costado puede almacenar\nluz solar. Brilla con mucha fuerza por la noche.",
		'it-it': "La linea che contorna il suo corpo immagazzina la luce\nsolare. Di notte si illumina di una luce splendente.",
		'de-de': "Die Linie an seiner Seite kann Sonnenlicht\nspeichern. Nachts leuchtet es sehr intensiv.",
		'pt-br': "A linha na lateral de seu corpo armazena luz solar\ne brilha intensamente à noite.",
		'ko-kr': "몸 옆쪽에 있는 줄에\n태양 빛을 모아 둘 수 있다.\n밤이 되면 아름답게 빛난다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre",
			'pt-br': "Revólver d'Água",
			'ko-kr': "물대포"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
