import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano",
		it: "Growlithe",
		es: "Growlithe",
		pt: "Growlithe",
		'es-mx': "Growlithe"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			de: "Glühende Kohlen",
			it: "Carboni Ardenti",
			es: "Carbón Activado",
			pt: "Carvão Vivo",
			'es-mx': "Carbón Activado"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			it: "Scavazanne",
			es: "Hundir Garras",
			pt: "Fincar Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825900,
				tcgplayer: 632850
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825900,
				tcgplayer: 632850
			}
		},
	],
}

export default card
