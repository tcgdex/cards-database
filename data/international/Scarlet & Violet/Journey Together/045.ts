import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d'Alola",
		'es-es': "Graveler de Alola",
		'de-de': "Alola-Georok",
		'it-it': "Graveler di Alola",
		'pt-br': "Graveler de Alola",
		'es-mx': "Graveler de Alola"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d'Alola",
		'es-es': "Geodude de Alola",
		'de-de': "Alola-Kleinstein",
		'it-it': "Geodude di Alola",
		'pt-br': "Geodude de Alola",
		'es-mx': "Geodude de Alola"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electric Punch",
			'fr-fr': "Poing Électrique",
			'es-es': "Puño Eléctrico",
			'de-de': "Elektroschlag",
			'it-it': "Pugno Elettrico",
			'pt-br': "Murro Elétrico",
			'es-mx': "Puño Eléctrico"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "HYOGONOSUKE",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817197,
				tcgplayer: 623472
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817197,
				tcgplayer: 623472
			}
		},
	],
}

export default card
