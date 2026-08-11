import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mothim",
		'fr-fr': "Papilord",
		'es-es': "Mothim",
		'it-it': "Mothim",
		'de-de': "Moterpel",
		'pt-br': "Mothim",
		'ko-kr': "나메일"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [414],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Burmy"
	},

	description: {
		'en-us': "It loves the honey of flowers and steals honey collected by Combee.",
		'fr-fr': "Il aime le nectar des fleurs et n'hésite\npas à voler celui que récupère Apitrini.",
		'es-es': "Le encanta la miel de las flores y roba la que recoge Combee.",
		'it-it': "Ama il nettare dei fiori. Ruba e mangia\nil nettare raccolto da Combee.",
		'de-de': "Es liebt Honig und stiehlt den Honig,\nder von Wadribie gesammelt wurde.",
		'pt-br': "Adora o néctar das flores e rouba mel\ncoletado por Combee.",
		'ko-kr': "꽃의 꿀을 매우 좋아한다.\n세꿀버리가 모아둔 꿀을\n가로채어 먹어 버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'de-de': "Windstoß",
			'pt-br': "Lufada de Vento",
			'ko-kr': "바람일으키기"
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
