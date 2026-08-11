import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'es-es': "Hariyama",
		'it-it': "Hariyama",
		'pt-br': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Thick Fat",
				'fr-fr': "Isograisse",
				'es-es': "Sebo",
				'it-it': "Grassospesso",
				'pt-br': "Gordura Espessa",
				'de-de': "Speckschicht"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks from your opponent's Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido a este Pokémon por ataques de los Pokémon Fire o Water de tu rival se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire o Water del tuo avversario sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano feito a este Pokémon por ataques de Pokémon Fire ou Water do seu oponente será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe der Fire- oder Water- Pokémon deines Gegners zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rocket Slap",
				'fr-fr': "Baffe Accélérée",
				'es-es': "Bofetada Vertiginosa",
				'it-it': "Razzosberla",
				'pt-br': "Tapa Foguete",
				'de-de': "Raketenklatscher"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It stomps on the ground to build power. It can send a 10-ton truck flying with a straight-arm punch.",
	},

	thirdParty: {
		cardmarket: 281716,
		tcgplayer: 92229
	}
}

export default card
