import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [627],
	set: Set,

	name: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Jump On",
			'fr-fr': "Saut",
			'es-es': "Asaltar",
			'it-it': "Salta Su",
			'pt-br': "Pular em Cima",
			'de-de': "Draufspringen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682195,
				tcgplayer: 451797
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682195,
				tcgplayer: 451797
			}
		},
	],
}

export default card
