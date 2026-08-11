import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'de-de': "Wie-Shu",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'es-es': "Mienshao",
		'es-mx': "Mienshao"
	},

	illustrator: "Atsuya Uki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'de-de': "Lin-Fu",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'es-es': "Mienfoo",
		'es-mx': "Mienfoo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'de-de': "Fußtritt",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo",
			'es-es': "Puntapié",
			'es-mx': "Barredora"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Smash Uppercut",
			'fr-fr': "Poing Fracassant",
			'de-de': "Geballter Kinnhaken",
			'it-it': "Spaccamontante",
			'pt-br': "Pancada para Cima",
			'es-es': "Gancho Destructor",
			'es-mx': "Uppercut Devastador"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836155,
				tcgplayer: 642247
			}
		},
	],
}

export default card
