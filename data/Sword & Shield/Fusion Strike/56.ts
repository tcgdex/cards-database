import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [159],
	set: Set,

	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		it: "Totodile",
		pt: "Totodile",
		de: "Karnimani"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "Once it bites down, it won't let go until it loses its fangs. New fangs quickly grow into place."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			it: "Schizzi d'Onda"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			es: "Surf",
			pt: "Surfar",
			it: "Surf"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card