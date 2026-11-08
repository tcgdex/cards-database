import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'it-it': "Karrablast",
		'de-de': "Laukaps",
		'pt-br': "Karrablast",
		'ko-kr': "딱정곤"
	},

	illustrator: "OOYAMA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [588],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve.",
		'fr-fr': "Son corps étrangement structuré\na la faculté de réagir à l'électricité.\nIl évolue lorsqu'il croise un Escargaume.",
		'es-es': "Su misterioso cuerpo reacciona a la energía eléctrica.\nSi se encuentra en presencia de un Shelmet, evoluciona.",
		'it-it': "Il suo corpo reagisce misteriosamente all'energia\nelettrica. Si evolve se si trova in presenza di Shelmet.",
		'de-de': "Sein Körper reagiert unerklärlicherweise auf\nElektrizität. Die Anwesenheit von Schnuthelm\nlöst bei ihm die Entwicklung aus.",
		'pt-br': "A sua fisiologia estranha reage à energia elétrica\nde maneiras interessantíssimas. A presença de Shelmet\nfaz com que este Pokémon evolua.",
		'ko-kr': "전기 에너지에 반응하는\n이상한 체질을 지녔다.\n쪼마리와 함께 있으면 진화한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss",
			'pt-br': "Cabeçada",
			'ko-kr': "박치기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card