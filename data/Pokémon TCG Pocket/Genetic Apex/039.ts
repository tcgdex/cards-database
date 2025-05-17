import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
		fr: "Courageux et fidèle, il se dresse vaillamment devant\nses ennemis même s'ils sont plus puissants que lui.",
		es: "De naturaleza valiente y honrada, se enfrenta\nsin miedo a enemigos más grandes y fuertes.",
		it: "Coraggioso e affidabile, si oppone senza\npaura anche a nemici più grandi e forti di lui.",
		de: "Es ist von Natur aus tapfer und vertrauenswürdig\nund scheut auch vor Gegnern nicht zurück,\ndie größer und stärker sind als es selbst.",
		'pt-br': "Tem uma natureza corajosa e leal e enfrenta\nsem medo adversários maiores e mais fortes.",
		ko: "자신보다 강하고\n큰 상대라도 겁 없이 맞서는\n용감하고 믿음직스런 성격이다."
	},

	boosters: ["pikachu"]
}

export default card
