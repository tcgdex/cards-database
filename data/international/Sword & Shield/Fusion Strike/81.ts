import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		'en-us': "Drednaw",
		'fr-fr': "Torgamord",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'pt-br': "Drednaw",
		'de-de': "Kamalm"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		'en-us': "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hard Bite",
			'fr-fr': "Morsure Profonde",
			'de-de': "Kräftiger Biss",
			'es-es': "Mordisco Contundente",
			'pt-br': "Mordida Agressiva",
			'it-it': "Supermorso"
		},

		damage: "80+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582215,
				tcgplayer: 253235
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582215,
				tcgplayer: 253235
			}
		},
	],
}

export default card
