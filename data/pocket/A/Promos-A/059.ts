import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'de-de': "Riolu",
		'pt-br': "Riolu",
		'ko-kr': "리오르"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",

	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "They communicate with one another using their\nauras. They are able to run all through the night.",
		'fr-fr': "Les Riolu communiquent entre eux à l'aide de\nleur aura. Ils sont capables de courir toute la nuit.",
		'es-es': "Se comunica con los suyos emitiendo ondas.\nPuede pasarse toda una noche corriendo.",
		'it-it': "Comunica con i suoi simili tramite l'aura.\nPuò correre un'intera notte senza stancarsi.",
		'de-de': "Dieses Pokémon nutzt seine Aura, um mit seinen\nArtgenossen zu kommunizieren. Es kann eine\nganze Nacht lang laufen.",
		'pt-br': "Eles comunicam-se uns com os outros usando suas auras.\nSão capazes de correr a noite inteira.",
		'ko-kr': "파동을 내서\n동료끼리 의사소통을 한다.\n밤새도록 계속 달릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'de-de': "Boxhieb",
			'pt-br': "Soco",
			'ko-kr': "펀치"
		},

		cost: ["Fighting", "Fighting"],
		damage: 40
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
