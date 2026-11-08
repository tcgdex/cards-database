import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
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
				'en-us': "Any damage done to this Pokémon by attacks from your opponent’s Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
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
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'es-es': "Cascada",
				'it-it': "Cascata",
				'pt-br': "Cachoeira",
				'de-de': "Kaskade"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish the movements of living things on riverbeds.",
	},

	thirdParty: {
		cardmarket: 299440,
		tcgplayer: 138515
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
