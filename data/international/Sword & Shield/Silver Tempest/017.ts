import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Jump On",
			'fr-fr': "Saut",
			'es-es': "Asaltar",
			'it-it': "Salta Su",
			'pt-br': "Pular em Cima",
			'de-de': "Draufspringen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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
	regulationMark: "F",


	description: {
		'en-us': "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682058,
				tcgplayer: 451646
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682058,
				tcgplayer: 451646
			}
		},
	],
}

export default card
