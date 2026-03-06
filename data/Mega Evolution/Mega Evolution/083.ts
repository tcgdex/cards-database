import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Naclstack",
		fr: "Amassel",
		de: "Sedisal",
		it: "Naclstack",
		es: "Naclstack",
		pt: "Naclstack",
		'es-mx': "Naclstack"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		en: "Nacli",
		fr: "Selutin",
		de: "Geosali",
		it: "Nacli",
		es: "Nacli",
		pt: "Nacli",
		'es-mx': "Nacli"
	},
	stage: "Stage1",
	dexId: [933],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rock Hurl",
			fr: "Lance-Pierre",
			de: "Steinschleuderer",
			it: "Scaglia Pietre",
			es: "Lanzamiento de Rocas",
			pt: "Lançamento de Pedras",
			'es-mx': "Lanzamiento de Rocas"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654422,
		cardmarket: 851154
	}
}

export default card