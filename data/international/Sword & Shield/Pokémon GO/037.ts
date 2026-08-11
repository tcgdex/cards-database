import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rock Smash",
			'fr-fr': "Éclate-Roc",
			'es-es': "Golpe Roca",
			'it-it': "Spaccaroccia",
			'pt-br': "Esmagamento de Pedras",
			'de-de': "Zertrümmerer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Born deep underground, it comes aboveground and becomes a pupa once it has finished eating the surrounding soil.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665667,
				tcgplayer: 276984
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665667,
				tcgplayer: 276984
			}
		},
	],
}

export default card
