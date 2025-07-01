import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Slugma",
		fr: "Limagma de Luth",
		de: "Klarins Schneckmag",
		it: "Slugma di Armonio",
		es: "Slugma de Eco",
		pt: "Slugma do Ethan",
		'es-mx': "Slugma de Ethan"
	},

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
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			es: "Lanzallamas Continuo",
			pt: "Hálito de Fogo Constante",
			'es-mx': "Escupefuego"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
