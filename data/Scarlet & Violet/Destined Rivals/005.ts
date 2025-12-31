import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		de: "Knilz",
		it: "Shroomish",
		es: "Shroomish",
		pt: "Shroomish",
		'es-mx': "Shroomish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			de: "Rolltackle",
			it: "Rollazione",
			es: "Placaje Giro",
			pt: "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 30
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
		cardmarket: 825879
	}
}

export default card
