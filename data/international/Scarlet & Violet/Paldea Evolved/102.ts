import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'fr-fr': "Forgerette",
		'en-us': "Tinkatink",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Centrifugifle",
			'en-us': "Brutal Swing",
			'es-es': "Giro Vil",
			'it-it': "Vorticolpo",
			'pt-br': "Balanço Violento",
			'de-de': "Wirbler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715577,
				tcgplayer: 497517,
				cardtrader: 248731
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715577,
				tcgplayer: 497517,
				cardtrader: 248731
			}
		},
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
	},
}

export default card
