import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lunatone",
		'fr-fr': "Séléroc",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'de-de': "Lunastein",
		'pt-br': "Lunatone",
		'ko-kr': "루나톤"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [337],
	hp: 90,
	types: ["Psychic"],

	description: {
		'en-us': "The phase of the moon apparently has some effect on its power. It's active on the night of a full moon.",
		'fr-fr': "Sa force est liée au cycle lunaire.\nIl est surtout actif les soirs de pleine lune.",
		'es-es': "Se piensa que las fases lunares tienen relación con la fluctuación\nde su poder. Se vuelve activo las noches de luna llena.",
		'it-it': "La sua forza sembra aumentare o diminuire a seconda\ndelle fasi lunari. È più attivo nelle notti di luna piena.",
		'de-de': "Anscheinend steht die Zunahme seiner Kraft mit den\nMondphasen in Verbindung, da es bei Vollmond aktiv wird.",
		'pt-br': "A fase lunar aparentemente tem algum efeito\nsobre seu poder. Ele é ativo na noite de lua cheia.",
		'ko-kr': "달의 차고 기욺과 힘의\n증감이 관계하고 있는 듯\n보름달 밤에 활발해진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Moon Press",
			'fr-fr': "Pression Lunaire",
			'es-es': "Presión Lunar",
			'it-it': "Pressa Lunare",
			'de-de': "Mondkraft",
			'pt-br': "Pressão Lunar",
			'ko-kr': "문프레스"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card