import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [833],

	name: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Jaw Lock",
				'fr-fr': "Croque Fort",
				'es-es': "Presa Maxilar",
				'it-it': "Morsostretto",
				'pt-br': "Trava de Mandíbula",
				'de-de': "Fesselbiss"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Apparently the itch of its teething impels it to snap its jaws at anything in front of it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511610,
				tcgplayer: 226423
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511610,
				tcgplayer: 226423
			}
		},
	],
}

export default card
