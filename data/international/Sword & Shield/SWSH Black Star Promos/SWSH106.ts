import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Single Strike Urshifu V",
		'fr-fr': "Shifours Poing Final V",
		'es-es': "Urshifu Golpe Brusco V",
		'it-it': "Urshifu Singolcolpo V",
		'pt-br': "Urshifu Golpe Decisivo V",
		'de-de': "Fokussierter-Angriff-Wulaosu V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Brawny Knuckle",
			'fr-fr': "Poing Batailleur",
			'es-es': "Nudillo Fornido",
			'it-it': "Pugno Vigoroso",
			'pt-br': "Punho Musculoso",
			'de-de': "Muskelfaust"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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
	dexId: [892],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 546971
	}
}

export default card
