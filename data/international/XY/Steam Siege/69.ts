import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'it-it': "Shieldon",
		'pt-br': "Shieldon",
		'de-de': "Schilterus"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Head",
				'fr-fr': "Tête de Roc",
				'es-es': "Cabeza Roca",
				'it-it': "Testadura",
				'pt-br': "Cabeça de Pedra",
				'de-de': "Steinhaupt"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	evolveFrom: {
		'en-us': "Armor Fossil Shieldon",
		'fr-fr': "Fossile Armure Dinoclier",
		'es-es': "Fósil Coraza Shieldon",
		'it-it': "Fossilscudo di Shieldon",
		'pt-br': "Fóssil Armadura de Shieldon",
		'de-de': "Schilterus' Panzerfossil"
	},

	description: {
		'en-us': "It was generated from a fossil dug out of a layer of clay that was older than anyone knows. It has a sturdy face.",
	},

	thirdParty: {
		cardmarket: 291635,
		tcgplayer: 121198
	}
}

export default card
