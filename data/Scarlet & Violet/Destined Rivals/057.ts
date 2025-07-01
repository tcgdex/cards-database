import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel",
		fr: "Mustébouée",
		de: "Bamelin",
		it: "Buizel",
		es: "Buizel",
		pt: "Buizel",
		'es-mx': "Buizel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			de: "Schweifvertrimmer",
			it: "Codabotta",
			es: "Coletón",
			pt: "Surra de Cauda",
			'es-mx': "Coletón"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
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
