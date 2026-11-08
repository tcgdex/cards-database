import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plump Body",
				'fr-fr': "Corps Dodu",
				'es-es': "Cuerpo Rellenete",
				'it-it': "Cicciocorpo",
				'pt-br': "Corpo Gorducho",
				'de-de': "Fülliger Körper"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido a este Pokémon por ataques se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado a este Pokémon por ataques será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'es-es': "Derribar",
				'it-it': "Scaraventa",
				'pt-br': "Jogar Longe",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	thirdParty: {
		cardmarket: 286364,
		tcgplayer: 107236
	}
}

export default card
