import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'de-de': "Fukano",
		'pt-br': "Growlithe",
		'ko-kr': "가디"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [58],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
		'fr-fr': "Courageux et fidèle, il se dresse vaillamment devant\nses ennemis même s'ils sont plus puissants que lui.",
		'es-es': "De naturaleza valiente y honrada, se enfrenta\nsin miedo a enemigos más grandes y fuertes.",
		'it-it': "Coraggioso e affidabile, si oppone senza\npaura anche a nemici più grandi e forti di lui.",
		'de-de': "Es ist von Natur aus tapfer und vertrauenswürdig\nund scheut auch vor Gegnern nicht zurück,\ndie größer und stärker sind als es selbst.",
		'pt-br': "Tem uma natureza corajosa e leal e enfrenta\nsem medo adversários maiores e mais fortes.",
		'ko-kr': "자신보다 강하고\n큰 상대라도 겁 없이 맞서는\n용감하고 믿음직스런 성격이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'de-de': "Glühen",
			'pt-br': "Combustão",
			'ko-kr': "화염"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo", "lunala"]
}

export default card