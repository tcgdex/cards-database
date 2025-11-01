import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [443],
	set: Set,

	name: {
		en: "Cynthia's Gible",
		fr: "Griknot de Cynthia",
		de: "Cynthias Kaumalat",
		it: "Gible di Camilla",
		es: "Gible de Cintia",
		pt: "Gible da Cíntia",
		'es-mx': "Gible de Cynthia"
	},

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

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825976
	}
}

export default card
