import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Yungoos",
		fr: "Manglouton",
		es: "Yungoos",
		it: "Yungoos",
		de: "Mangunior",
		'pt-br': "Yungoos",
		ko: "영구스"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its stomach fills most of its torso. It wanders the same path every day, searching for fresh food.",
		fr: "Son estomac occupe la plus grande partie de\nson corps. Chaque jour, il parcourt le même trajet\net déambule en quête de nourriture fraîche.",
		es: "El estómago le ocupa gran parte del cuerpo. Sigue la misma ruta\ntodos los días, deambulando sin cesar en busca de alimento fresco.",
		it: "Lo stomaco occupa la maggior parte del suo corpo.\nSegue ogni giorno lo stesso percorso in cerca di cibo fresco.",
		de: "Sein Magen füllt beinahe seinen ganzen Körper aus.\nAuf der Suche nach frischem Futter schlägt es täglich\ndenselben Pfad ein.",
		'pt-br': "Seu estômago preenche a maior parte de seu tronco.\nPerambula o mesmo caminho todos os dias em busca\nde alimentos frescos.",
		ko: "몸의 대부분이 위장이다.\n매일 같은 경로를 배회하며\n신선한 먹이를 찾는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card