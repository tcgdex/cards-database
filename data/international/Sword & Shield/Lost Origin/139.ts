import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [463],
	set: Set,

	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'es-es': "Lickilicky",
		'it-it': "Lickilicky",
		'pt-br': "Lickilicky",
		'de-de': "Schlurplek"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'es-es': "Bofetón Lengua",
			'it-it': "Linguasberla",
			'pt-br': "Tapa de Língua",
			'de-de': "Zungenschelle"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674149,
				tcgplayer: 284062
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674149,
				tcgplayer: 284062
			}
		},
	],
}

export default card
