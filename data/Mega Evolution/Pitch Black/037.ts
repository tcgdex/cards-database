import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Lampent appears at the moment of death and promptly absorbs the spirit as it leaves the body."
	},

	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		'es-mx': "Lampent",
		de: "Laternecto"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [608],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Litwick"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spreading Light",
			es: "Dispersión Lumínica",
			'es-mx': "Luz Expansiva"
		},

		cost: ["Psychic"],

		effect: {
			en: "Put up to 3 Lampent from your deck onto your Bench, then shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Lampent y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Lampent y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
	],
}

export default card
