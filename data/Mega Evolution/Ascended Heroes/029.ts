import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		'es-mx': "Tepig",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675841,
		cardmarket: 869640
	}
}

export default card