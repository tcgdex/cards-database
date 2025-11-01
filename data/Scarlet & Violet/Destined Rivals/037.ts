import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		en: "Team Rocket's Houndour",
		fr: "Malosse de la Team Rocket",
		de: "Team Rockets Hunduster",
		it: "Houndour del Team Rocket",
		es: "Houndour del Team Rocket",
		pt: "Houndour da Equipe Rocket",
		'es-mx': "Houndour del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			es: "Lanzallamas Continuo",
			pt: "Hálito de Fogo Constante",
			'es-mx': "Escupefuego"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825911
	}
}

export default card
