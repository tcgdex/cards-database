import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [838],
	set: Set,

	name: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Knock Away",
			'fr-fr': "Asticotage",
			'es-es': "Derribar",
			'it-it': "Scaraventa",
			'pt-br': "Jogar Longe",
			'de-de': "Zurückschlagen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Rocha Esmagadora",
			'de-de': "Felsenquetscher"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "The temperature inside its body increases when it experiences strong emotions. It rolls around frantically while spewing flames.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760724,
				tcgplayer: 542838
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760724,
				tcgplayer: 542838
			}
		},
	],

	illustrator: "Anesaki Dynamic",

}

export default card