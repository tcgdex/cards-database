import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'de-de': "Arboretoss",
		'pt-br': "Dartrix",
		'ko-kr': "빼미스로우"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [723],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Rowlet"
	},

	description: {
		'en-us': "This narcissistic Pokémon is a clean freak. If you don't groom it diligently, it may stop listening to you.",
		'fr-fr': "Ce Pokémon narcissique accorde énormément\nd'importance à la propreté. Il refuse parfois\nd'obéir si l'on ne prend pas grand soin de lui.",
		'es-es': "Es narcisista y bastante pulcro, por lo que, si no se le dedica\nsuficiente atención a su aseo, se niega a obedecer cualquier orden.",
		'it-it': "È un narciso e ama la pulizia al punto di smettere di\nobbedire se non ci si prende cura di lui come si deve.",
		'de-de': "Es ist selbstverliebt und legt großen Wert auf\nSauberkeit. Wenn man es nicht ordentlich pflegt,\nwidersetzt es sich manchmal sogar Befehlen.",
		'pt-br': "Este Pokémon narcisista é maníaco por limpeza.\nSe não cuidar da sua higiene com muita atenção,\ntalvez ele não obedeça mais a você.",
		'ko-kr': "나르시스트로 깔끔한 걸 좋아한다.\n자주 관리해 주지 않으면\n말을 안 듣기도 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'it-it': "Ala Tagliente",
			'de-de': "Rasierflügel",
			'pt-br': "Asa Cortante",
			'ko-kr': "날카로운날개"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card