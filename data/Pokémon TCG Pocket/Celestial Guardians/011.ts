import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		de: "Arboretoss",
		'pt-br': "Dartrix",
		ko: "빼미스로우"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Rowlet"
	},

	description: {
		en: "This narcissistic Pokémon is a clean freak. If you don't groom it diligently, it may stop listening to you.",
		fr: "Ce Pokémon narcissique accorde énormément\nd'importance à la propreté. Il refuse parfois\nd'obéir si l'on ne prend pas grand soin de lui.",
		es: "Es narcisista y bastante pulcro, por lo que, si no se le dedica\nsuficiente atención a su aseo, se niega a obedecer cualquier orden.",
		it: "È un narciso e ama la pulizia al punto di smettere di\nobbedire se non ci si prende cura di lui come si deve.",
		de: "Es ist selbstverliebt und legt großen Wert auf\nSauberkeit. Wenn man es nicht ordentlich pflegt,\nwidersetzt es sich manchmal sogar Befehlen.",
		'pt-br': "Este Pokémon narcisista é maníaco por limpeza.\nSe não cuidar da sua higiene com muita atenção,\ntalvez ele não obedeça mais a você.",
		ko: "나르시스트로 깔끔한 걸 좋아한다.\n자주 관리해 주지 않으면\n말을 안 듣기도 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			it: "Ala Tagliente",
			de: "Rasierflügel",
			'pt-br': "Asa Cortante",
			ko: "날카로운날개"
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