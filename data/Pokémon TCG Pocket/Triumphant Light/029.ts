import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		de: "Piepi",
		'pt-br': "Clefairy",
		ko: "삐삐"
	},

	illustrator: "rika",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
		fr: "On dit que ceux qui voient danser un groupe de Mélofée\nsous la pleine lune connaîtront un grand bonheur.",
		es: "Se dice que la felicidad llegará\na quien vea un grupo de Clefairy\nbailando a la luz de la luna llena.",
		it: "Si dice che vedere un gruppo di Clefairy ballare\ncon la luna piena sia di ottimo auspicio.",
		de: "Eine Ansammlung von Piepi bei Vollmond tanzen\nzu sehen, soll ein glückliches Leben verheißen.",
		'pt-br': "Acredita-se que a felicidade virá para aqueles\nque virem um grupo de Clefairy dançando sob\na lua cheia.",
		ko: "보름달 밤에 삐삐가 모여\n춤을 추는 모습을 보면\n행복해진다고 전해진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			it: "Schiaffo",
			de: "Klatscher",
			'pt-br': "Estalo",
			ko: "수벽치기"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
