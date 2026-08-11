import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [722],
	set: Set,

	name: {
		'fr-fr': "Brindibou",
		'de-de': "Bauz",
		'es-es': "Rowlet",
		'pt-br': "Rowlet",
		'it-it': "Rowlet",
		'en-us': "Rowlet"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Saut",
			'de-de': "Draufspringen",
			'es-es': "Asaltar",
			'pt-br': "Pular em Cima",
			'it-it': "Salta Su",
			'en-us': "Jump On"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'en-us': "Flip a coin. If heads, this attack does 10 more damage."
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
		'en-us': "Flies noiselessly on delicate wings. It has mastered the art of deftly launching dagger-sharp feathers from those same wings."
	},

	thirdParty: {
		cardmarket: 609466
	}
}

export default card
