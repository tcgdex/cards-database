import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [633],
	set: Set,

	name: {
		'fr-fr': "Solochi",
		'en-us': "Deino",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Embuscade",
			'en-us': "Ambush",
			'es-es': "Emboscada",
			'it-it': "Imboscata",
			'pt-br': "Emboscada",
			'de-de': "Hinterhalt"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715613,
				tcgplayer: 497638,
				cardtrader: 248795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715613,
				tcgplayer: 497638,
				cardtrader: 248795
			}
		},
	],

	illustrator: "Narumi Sato",

	description: {
		'en-us': "It can't see, so its first approach to examining things is to bite them. You will be covered in wounds until a Deino warms up to you.",
	},
}

export default card
