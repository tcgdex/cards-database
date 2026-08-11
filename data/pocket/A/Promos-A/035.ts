import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'es-es': "Turtwig",
		'it-it': "Turtwig",
		'de-de': "Chelast",
		'pt-br': "Turtwig",
		'ko-kr': "모부기"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",

	dexId: [387],
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "It uses its whole body to photosynthesize when\nexposed to sunlight. Its shell is made from\nhardened soil.",
		'fr-fr': "Il s'expose à la lumière du soleil pour que\nson corps l'assimile par photosynthèse.\nSa carapace est composée de terre durcie.",
		'es-es': "Al bañarlo los rayos de sol, realiza la fotosíntesis con todo\nel cuerpo. Su caparazón está formado por tierra endurecida.",
		'it-it': "Si espone ai raggi solari ed esegue la fotosintesi con\ntutto il corpo. La sua corazza è fatta di terra rassodata.",
		'de-de': "Es badet im Sonnenlicht und betreibt dabei mit\ndem ganzen Körper Fotosynthese. Sein Panzer\nbesteht aus hartem Lehm.",
		'pt-br': "Usa o corpo todo para fazer fotossíntese ao se expor\nà luz do sol. Seu casco é feito de solo endurecido.",
		'ko-kr': "태양의 빛을 쬐어\n전신으로 광합성을 한다.\n등껍질은 흙이 딱딱해진 것이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida",
			'ko-kr': "물기"
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
