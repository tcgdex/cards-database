import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'es-es': "Venipede",
		'it-it': "Venipede",
		'de-de': "Toxiped",
		'pt-br': "Venipede",
		'ko-kr': "마디네"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",

	dexId: [543],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
		'fr-fr': "Bien qu'appartenant à des espèces similaires,\nles Venipatte et les Grillepattes se livrent\nà des conflits violents lorsqu'ils se croisent.",
		'es-es': "Aunque se trata de una especie emparentada\ncon los Sizzlipede, si se encuentran ejemplares\nde ambas, entablarán una lucha encarnizada.",
		'it-it': "Appartiene a una specie simile a quella di Sizzlipede, ma\nse le loro strade si incrociano si scatena il finimondo.",
		'de-de': "Es ist zwar artverwandt mit Thermopod, aber\njedes Mal, wenn sich die beiden über den Weg\nkrabbeln, streiten sie erbittert miteinander.",
		'pt-br': "Venipede e Sizzlipede são espécies similares, mas,\nquando se encontram, travam uma briga daquelas.",
		'ko-kr': "태우지네와는 종류가 다른\n동료지만 서로 만나면\n큰 싸움이 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'de-de': "Ramme",
			'pt-br': "Aríete",
			'ko-kr': "부딪치기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
