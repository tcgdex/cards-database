import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'de-de': "Piepi",
		'pt-br': "Clefairy",
		'ko-kr': "삐삐"
	},

	illustrator: "Shibuzoh.",
	rarity: "None",
	category: "Pokemon",

	dexId: [35],
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'de-de': "Hieb",
			'pt-br': "Tapa",
			'ko-kr': "뺨치기"
		},

		cost: ["Psychic"],
		damage: 20
	}],

	hp: 60,

	description: {
		'en-us': "It is said that happiness will come to those who\nsee a gathering of Clefairy dancing under a\nfull moon.",
		'fr-fr': "On dit que ceux qui voient danser un groupe de Mélofée\nsous la pleine lune connaîtront un grand bonheur.",
		'es-es': "Se dice que la felicidad llegará\na quien vea un grupo de Clefairy\nbailando a la luz de la luna llena.",
		'it-it': "Si dice che vedere un gruppo di Clefairy ballare\ncon la luna piena sia di ottimo auspicio.",
		'de-de': "Eine Ansammlung von Piepi bei Vollmond tanzen\nzu sehen, soll ein glückliches Leben verheißen.",
		'pt-br': "Acredita-se que a felicidade virá para aqueles\nque virem um grupo de Clefairy dançando sob\na lua cheia.",
		'ko-kr': "보름달 밤에 삐삐가 모여\n춤을 추는 모습을 보면\n행복해진다고 전해진다."
	},

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol1"]
}

export default card
