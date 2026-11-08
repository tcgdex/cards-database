import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Alolan Raichu",
		'fr-fr': "Raichu d’Alola",
		'es-es': "Raichu de Alola",
		'it-it': "Raichu di Alola",
		'pt-br': "Raichu de Alola",
		'de-de': "Alola-Raichu"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Surfer",
				'fr-fr': "Surfeur Électrique",
				'es-es': "Surfeo Eléctrico",
				'it-it': "Surfista Elettrico",
				'pt-br': "Surfista Elétrico",
				'de-de': "Elektrosurfer"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It only evolves to this form in the Alola region. According to researchers, its diet is one of the causes of this change.",
	},
}

export default card
