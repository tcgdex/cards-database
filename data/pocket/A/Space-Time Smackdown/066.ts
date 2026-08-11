import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'de-de': "Traunfugil",
		'pt-br': "Misdreavus",
		'ko-kr': "무우마"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [200],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
		'fr-fr': "Il fait peur aux gens en pleine nuit et se nourrit de leur frayeur.",
		'es-es': "Sorprende a la gente en mitad de la noche\ny acumula su miedo como energía.",
		'it-it': "Un Pokémon che terrorizza la gente nel cuore della\nnotte. Assorbe la paura per usarla come energia.",
		'de-de': "Ein Pokémon, das Menschen mitten in der Nacht\nerschreckt. Es sammelt die Angst als seine Energie.",
		'pt-br': "Este Pokémon assusta pessoas no meio da noite.\nAcumula o medo para usar como energia.",
		'ko-kr': "한밤중에 사람을 놀라게 하고\n무서워하는 마음을 모아 자신의\n에너지로 만드는 포켓몬이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'de-de': "Grummeln",
			'pt-br': "Resmungo",
			'ko-kr': "중얼거리기"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
