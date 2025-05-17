import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Grotle",
		fr: "Boskara",
		es: "Grotle",
		it: "Grotle",
		de: "Chelcarain",
		'pt-br': "Grotle",
		ko: "수풀부기"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Turtwig"
	},

	description: {
		en: "It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.",
		fr: "Il vit en forêt près de l'eau. En journée, il la\nquitte pour dorer sa carapace feuillue au soleil.",
		es: "Vive en los bosques cerca del agua. Por el día,\nsale a que les dé el sol a las plantas de su espalda.",
		it: "Vive nelle foreste vicino all'acqua, ma esce di\ngiorno per far prendere sole alle piante sul guscio.",
		de: "Es lebt in der Nähe von Wasser in Wäldern.\nTagsüber verlässt es diese, um ein Sonnenbad\nzu nehmen.",
		'pt-br': "Mora à beira d'água nas florestas. Durante o dia,\ndeixa a mata para seu casco arbóreo tomar sol.",
		ko: "숲 속의 물가에서 산다.\n낮에는 숲 밖으로 나와서\n등껍질의 나무에 빛을 쬔다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			de: "Rasierblatt",
			'pt-br': "Folha Navalha",
			ko: "잎날가르기"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
