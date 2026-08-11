import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [288],
	set: Set,

	name: {
		'fr-fr': "Vigoroth",
		'en-us': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Parecool",
		'en-us': "Slakoth",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Confrontation",
			'en-us': "Confront",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Griffes Affûtées",
			'en-us': "Sharp Claws",
			'es-es': "Garras Afiladas",
			'it-it': "Artigli Affilati",
			'pt-br': "Garras Cortantes",
			'de-de': "Scharfe Krallen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715636,
				tcgplayer: 497579,
				cardtrader: 248815
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858719
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715636,
				tcgplayer: 497579,
				cardtrader: 248815
			}
		},
	],

	illustrator: "GIDORA",

	description: {
		'en-us': "Its stress level rises if it cannot keep moving constantly. Too much stress makes it feel sick.",
	},
}

export default card
