import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	dexId: [772],

	name: {
		en: "Type: Null",
		fr: "Type:0",
		es: "Código Cero",
		it: "Tipo Zero",
		pt: "Tipo Nulo",
		de: "Typ:Null"
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
				en: "Smash Kick",
				fr: "Coud’Pattes",
				es: "Patada Destrucción",
				it: "Calcio Esplosivo",
				pt: "Chute Poderoso",
				de: "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
				fr: "Coup d’Poing Éclair",
				es: "Golpe Rápido",
				it: "Colpo Veloce",
				pt: "Golpe Rápido",
				de: "Schnellschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 388702
	}
}

export default card
