import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		'fr-fr': "Rototaupe",
		'en-us': "Drilbur",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Botte Secrète",
			'en-us': "Rising Lunge",
			'es-es': "Embestida Ascendente",
			'it-it': "Elevazione",
			'pt-br': "Investida Ascendente",
			'de-de': "Aufwärtsstoß"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It's a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725191,
				tcgplayer: 509808,
				cardtrader: 255796
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725191,
				tcgplayer: 509808,
				cardtrader: 255796
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
