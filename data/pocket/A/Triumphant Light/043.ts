import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'de-de': "Meditie",
		'pt-br': "Meditite",
		'ko-kr': "요가랑"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [307],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It never skips its daily yoga training. It heightens its inner strength through meditation.",
		'fr-fr': "Méditikka ne rate jamais une séance\nde yoga. Il augmente sa force\nintérieure par la méditation.",
		'es-es': "Practica yoga a diario y no se pierde ni una sesión.\nMediante la meditación, aumenta su fuerza interior.",
		'it-it': "Non rinuncia mai alla sua ora di yoga\nquotidiana. La meditazione gli permette\ndi aumentare la sua forza interiore.",
		'de-de': "Es vergisst nie sein tägliches Yogatraining.\nDurch Meditation erhöht es seine innere Stärke.",
		'pt-br': "Nunca perde um dia de ioga.\nAumenta sua força interior com meditação.",
		'ko-kr': "매일 요가 수행을 거르지 않는다.\n명상을 통해서 정신력을 높인다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'it-it': "Calcio",
			'de-de': "Tritt",
			'pt-br': "Chute",
			'ko-kr': "킥"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card
