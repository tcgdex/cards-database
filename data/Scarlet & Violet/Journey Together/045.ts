import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d'Alola",
		es: "Graveler de Alola",
		de: "Alola-Georok",
		it: "Graveler di Alola",
		pt: "Graveler de Alola",
		'es-mx': "Graveler de Alola"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d'Alola",
		es: "Geodude de Alola",
		de: "Alola-Kleinstein",
		it: "Geodude di Alola",
		pt: "Geodude de Alola",
		'es-mx': "Geodude de Alola"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			de: "Rolltackle",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			de: "Elektroschlag",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico",
			'es-mx': "Puño Eléctrico"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "HYOGONOSUKE",

	thirdParty: {
		cardmarket: 817197
	},

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
