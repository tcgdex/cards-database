import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		de: "Wie-Shu",
		it: "Mienshao",
		pt: "Mienshao",
		es: "Mienshao",
		'es-mx': "Mienshao"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		de: "Lin-Fu",
		it: "Mienfoo",
		pt: "Mienfoo",
		es: "Mienfoo",
		'es-mx': "Mienfoo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			de: "Fußtritt",
			it: "Calciobasso",
			pt: "Movimento Baixo",
			es: "Puntapié",
			'es-mx': "Barredora"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Smash Uppercut",
			fr: "Poing Fracassant",
			de: "Geballter Kinnhaken",
			it: "Spaccamontante",
			pt: "Pancada para Cima",
			es: "Gancho Destructor",
			'es-mx': "Uppercut Devastador"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836000
	}
}

export default card