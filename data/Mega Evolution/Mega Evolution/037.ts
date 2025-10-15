import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Clauncher",
		fr: "Flingouste",
		de: "Scampisto",
		it: "Clauncher",
		es: "Clauncher",
		pt: "Clauncher",
		'es-mx': "Clauncher"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654376
	}
}

export default card