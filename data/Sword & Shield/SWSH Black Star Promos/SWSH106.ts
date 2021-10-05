import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu V",
		fr: "Shifours Poing Final V",
		es: "Urshifu Golpe Brusco V",
		it: "Urshifu Singolcolpo V",
		pt: "Single Strike Urshifu V",
		de: "Fokussierter-Angriff-Wulaosu V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Low Kick",
			de: "Fußkick"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Brawny Knuckle",
			fr: "Poing Batailleur",
			es: "Nudillo Fornido",
			it: "Pugno Vigoroso",
			pt: "Brawny Knuckle",
			de: "Muskelfaust"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "This attack’s damage isn’t affected by Resistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	suffix: "V",
	dexId: [892],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card