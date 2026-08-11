import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [607],
	set: Set,

	name: {
		'fr-fr': "Funécire",
		'en-us': "Litwick",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Souffle-Feu",
			'en-us': "Firebreathing",
			'es-es': "Aliento de Fuego",
			'it-it': "Fuocospiro",
			'pt-br': "Hálito de Fogo",
			'de-de': "Feuerhauch"
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
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The younger the life this Pokémon absorbs, the brighter and eerier the flame on its head burns.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725116,
				tcgplayer: 509737,
				cardtrader: 255596
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725116,
				tcgplayer: 509737,
				cardtrader: 255596
			}
		},
	],

	illustrator: "Nagomi Nijo",

	
}

export default card
