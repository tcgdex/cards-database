import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		'en-us': "Crocalor",
		'fr-fr': "Crocogril",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Breath",
			'fr-fr': "Souffle Ardent",
			'es-es': "Aliento Ardiente",
			'it-it': "Alitorovente",
			'pt-br': "Bafo de Calor",
			'de-de': "Heißer Atem"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794287,
				tcgplayer: 589908
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794287,
				tcgplayer: 589908
			}
		},
	],

	illustrator: "Atsuya Uki",
	
}

export default card
