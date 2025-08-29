import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		en: "Marnie's Morgrem",
		fr: "Fourbelin de Rosemary",
		de: "Marys Pelzebub",
		it: "Morgrem di Mary",
		es: "Morgrem de Roxy",
		pt: "Morgrem da Marine",
		'es-mx': "Morgrem de Marnie"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 60
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
	]
}

export default card
