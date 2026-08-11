import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Dunsparce",
		'fr-fr': "Insolourdo d'Okuba",
		'es-es': "Dunsparce de Laureano",
		'es-mx': "Dunsparce de Laureano",
		'de-de': "Aokis Dummisel",
		'it-it': "Dunsparce di Ubaldo",
		'pt-br': "Dunsparce do Lauro"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rising Lunge",
			'fr-fr': "Botte Secrète",
			'es-es': "Embestida Ascendente",
			'es-mx': "Embestida Ascendente",
			'de-de': "Aufwärtsstoß",
			'it-it': "Elevazione",
			'pt-br': "Investida Ascendente"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "J",

	description: {
		'en-us': "If spotted, it escapes by burrowing with its tail. It can float just slightly using its wings.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869774,
			tcgplayer: 675975
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870390,
			tcgplayer: 676979
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870389,
			tcgplayer: 677119
		}
	},
],
}

export default card