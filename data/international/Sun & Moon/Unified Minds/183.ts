import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	dexId: [772],

	name: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
		'es-es': "Código Cero",
		'it-it': "Tipo Zero",
		'pt-br': "Tipo Nulo",
		'de-de': "Typ:Null"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud’Pattes",
				'es-es': "Patada Destrucción",
				'it-it': "Calcio Esplosivo",
				'pt-br': "Chute Poderoso",
				'de-de': "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Blow",
				'fr-fr': "Coup d’Poing Éclair",
				'es-es': "Golpe Rápido",
				'it-it': "Colpo Veloce",
				'pt-br': "Golpe Rápido",
				'de-de': "Schnellschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon weapon developed for a specific mission, it went berserk during an experiment, so it was cryogenically frozen.",
	},

	thirdParty: {
		cardmarket: 388702,
		tcgplayer: 195194
	}
}

export default card
