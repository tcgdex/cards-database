import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		es: "Turtwig",
		it: "Turtwig",
		de: "Chelast",
		'pt-br': "Turtwig",
		ko: "모부기"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil.",
		fr: "Il s'expose à la lumière du soleil pour que\nson corps l'assimile par photosynthèse.\nSa carapace est composée de terre durcie.",
		es: "Al bañarlo los rayos de sol, realiza la fotosíntesis con todo\nel cuerpo. Su caparazón está formado por tierra endurecida.",
		it: "Si espone ai raggi solari ed esegue la fotosintesi con\ntutto il corpo. La sua corazza è fatta di terra rassodata.",
		de: "Es badet im Sonnenlicht und betreibt dabei mit\ndem ganzen Körper Fotosynthese. Sein Panzer\nbesteht aus hartem Lehm.",
		'pt-br': "Usa o corpo todo para fazer fotossíntese ao se expor\nà luz do sol. Seu casco é feito de solo endurecido.",
		ko: "태양의 빛을 쬐어\n전신으로 광합성을 한다.\n등껍질은 흙이 딱딱해진 것이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol4"]
}

export default card
