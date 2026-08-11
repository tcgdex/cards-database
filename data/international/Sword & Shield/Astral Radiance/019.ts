import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [722],
	set: Set,

	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jump On",
			'fr-fr': "Saut",
			'es-es': "Asaltar",
			'it-it': "Salta Su",
			'pt-br': "Pular em Cima",
			'de-de': "Draufspringen"
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
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Flies noiselessly on delicate wings. It has mastered the art of deftly launching dagger-sharp feathers from those same wings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658516,
				tcgplayer: 272219
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658516,
				tcgplayer: 272219
			}
		},
	],
}

export default card
