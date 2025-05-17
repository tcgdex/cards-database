import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		de: "Tukanon",
		'pt-br': "Toucannon",
		ko: "왕큰부리"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	description: {
		en: "They smack beaks with others of their kind to communicate. The strength and number of hits tell each other how they feel.",
		fr: "Ils communiquent entre eux en se frappant\nmutuellement sur le bec. La force et la cadence\ndes coups en disent long sur leur état d'esprit.",
		es: "Se comunican con sus compañeros chocando los\npicos. El número de veces y la fuerza con la que\nlo hacen transmiten sus distintos sentimientos.",
		it: "I Toucannon comunicano tra di loro sbattendo i becchi. La forza\ne il numero dei colpi indicano i sentimenti che vogliono esprimere.",
		de: "Sie kommunizieren miteinander, indem sie ihre\nSchnäbel gegeneinanderschlagen. Stärke und\nAnzahl der Schläge übermitteln ihre Gefühle.",
		'pt-br': "Batem os bicos com outros de sua espécie\npara se comunicar. A quantidade e a força das bicadas\ndemonstram como estão se sentindo.",
		ko: "동료와 부리를 부딪히며\n커뮤니케이션한다. 부딪히는 강도나\n횟수로 기분을 전달한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
			es: "Pico Taladro",
			it: "Perforbecco",
			de: "Bohrschnabel",
			'pt-br': "Bico Broca",
			ko: "회전부리"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo", "lunala"]
}

export default card