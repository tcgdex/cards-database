import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Mothim",
		fr: "Papilord",
		es: "Mothim",
		it: "Mothim",
		de: "Moterpel",
		'pt-br': "Mothim",
		ko: "나메일"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [414],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "It loves the honey of flowers and steals honey collected by Combee.",
		fr: "Il aime le nectar des fleurs et n'hésite\npas à voler celui que récupère Apitrini.",
		es: "Le encanta la miel de las flores y roba la que recoge Combee.",
		it: "Ama il nettare dei fiori. Ruba e mangia\nil nettare raccolto da Combee.",
		de: "Es liebt Honig und stiehlt den Honig,\nder von Wadribie gesammelt wurde.",
		'pt-br': "Adora o néctar das flores e rouba mel\ncoletado por Combee.",
		ko: "꽃의 꿀을 매우 좋아한다.\n세꿀버리가 모아둔 꿀을\n가로채어 먹어 버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			de: "Windstoß",
			'pt-br': "Lufada de Vento",
			ko: "바람일으키기"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0
}

export default card
