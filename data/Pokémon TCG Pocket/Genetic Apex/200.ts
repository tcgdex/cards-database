import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dodrio",
		fr: "Dodrio",
		es: "Dodrio",
		it: "Dodrio",
		de: "Dodri",
		'pt-br': "Dodrio",
		ko: "두트리오"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [85],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
			es: "Pico Taladro",
			it: "Perforbecco",
			de: "Bohrschnabel",
			'pt-br': "Bico Broca",
			ko: "회전부리"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond",

	description: {
		en: "An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.",
		fr: "Un ennemi ne faisant pas attention à l'une\ndes trois têtes pendant une seconde se fait picorer.",
		es: "Más vale no perder de vista ninguna de las tres cabezas.\nDe lo contrario, el número de picotazos será enorme.",
		it: "Occorre fare attenzione a tutte le sue tre teste,\naltrimenti si rischia d'essere colpiti duramente.",
		de: "Lässt ein Feind auch nur einen der\ndrei Köpfe für nur eine Sekunde aus\nden Augen, wird er sofort gepickt.",
		'pt-br': "Um inimigo que tire os olhos de qualquer uma\ndas três cabeças, mesmo que por apenas um\nsegundo, será bicado gravemente.",
		ko: "3개의 머리가 보고 있는 앞에서\n조금이라도 빈틈을 보이면\n부리로 격렬하게 쪼아댄다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
