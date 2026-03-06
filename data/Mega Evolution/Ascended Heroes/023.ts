import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Slugma",
		fr: "Limagma de Luth",
		es: "Slugma de Eco",
		'es-mx': "Slugma de Ethan",
		de: "Klarins Schneckmag",
		it: "Slugma di Armonio",
		pt: "Slugma do Ethan"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [218],

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
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675835,
		cardmarket: 869634
	}
}

export default card