import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		de: "Riolu",
		'pt-br': "Riolu",
		ko: "리오르"
	},

	illustrator: "You Iribi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "They communicate with one another using their auras. They are able to run all through the night.",
		fr: "Les Riolu communiquent entre eux à l'aide de\nleur aura. Ils sont capables de courir toute la nuit.",
		es: "Se comunica con los suyos emitiendo ondas.\nPuede pasarse toda una noche corriendo.",
		it: "Comunica con i suoi simili tramite l'aura.\nPuò correre un'intera notte senza stancarsi.",
		de: "Dieses Pokémon nutzt seine Aura, um mit seinen\nArtgenossen zu kommunizieren. Es kann eine\nganze Nacht lang laufen.",
		'pt-br': "Eles comunicam-se uns com os outros usando suas auras.\nSão capazes de correr a noite inteira.",
		ko: "파동을 내서\n동료끼리 의사소통을 한다.\n밤새도록 계속 달릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			de: "Boxhieb",
			'pt-br': "Soco",
			ko: "펀치"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card