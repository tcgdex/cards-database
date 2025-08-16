import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		en: "Galarian Farfetch'd",
		fr: "Canarticho de Galar",
		es: "Farfetch'd de Galar",
		it: "Farfetch'd di Galar",
		pt: "Farfetch'd de Galar",
		de: "Galar-Porenta"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Puncture",
			fr: "Perforation",
			es: "Pinchazo",
			it: "Perforazione",
			pt: "Perfuração",
			de: "Durchdringen"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The stalks of leeks are thicker and longer in the Galar region. Farfetch'd that adapted to these stalks took on a unique form."
	}
}

export default card
