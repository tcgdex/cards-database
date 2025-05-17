import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		de: "Fukano",
		'pt-br': "Growlithe",
		ko: "가디"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
		fr: "Courageux et fidèle, il se dresse vaillamment devant\nses ennemis même s'ils sont plus puissants que lui.",
		es: "De naturaleza valiente y honrada, se enfrenta\nsin miedo a enemigos más grandes y fuertes.",
		it: "Coraggioso e affidabile, si oppone senza\npaura anche a nemici più grandi e forti di lui.",
		de: "Es ist von Natur aus tapfer und vertrauenswürdig\nund scheut auch vor Gegnern nicht zurück,\ndie größer und stärker sind als es selbst.",
		'pt-br': "Tem uma natureza corajosa e leal e enfrenta\nsem medo adversários maiores e mais fortes.",
		ko: "자신보다 강하고\n큰 상대라도 겁 없이 맞서는\n용감하고 믿음직스런 성격이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			de: "Glühen",
			'pt-br': "Combustão",
			ko: "화염"
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