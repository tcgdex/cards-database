import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Gible",
		fr: "Griknot de Cynthia",
		es: "Gible de Cintia",
		'es-mx': "Gible de Cynthia",
		de: "Cynthias Kaumalat",
		it: "Gible di Camilla",
		pt: "Gible da Cíntia"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Hurl",
			fr: "Lance-Pierre",
			es: "Lanzamiento de Rocas",
			'es-mx': "Lanzamiento de Rocas",
			de: "Steinschleuderer",
			it: "Scaglia Pietre",
			pt: "Lançamento de Pedras"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675921,
		cardmarket: 869720
	}
}

export default card