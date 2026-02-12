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


	illustrator: "NC Empire",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		en: "Marnie's Impidimp",
		fr: "Grimalin de Rosemary",
		de: "Marys Bähmon",
		it: "Impidimp di Mary",
		es: "Impidimp de Roxy",
		pt: "Impidimp da Marine",
		'es-mx': "Impidimp de Marnie"
	},
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
	],

	thirdParty: {
		cardmarket: 826009
	}
}

export default card
