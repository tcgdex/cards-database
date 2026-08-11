import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [216],

	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Baby-Doll Eyes",
				'fr-fr': "Regard Touchant",
				'es-es': "Ojitos Tiernos",
				'it-it': "Occhioni Teneri",
				'pt-br': "Olhos Ternos",
				'de-de': "Kulleraugen"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dig Claws",
				'fr-fr': "Creusogriffes",
				'es-es': "Hundir Garras",
				'it-it': "Scavazanne",
				'pt-br': "Fincar Garras",
				'de-de': "Schaufelkrallen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483569,
				tcgplayer: 219336
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483569,
				tcgplayer: 219336
			}
		},
	],
}

export default card
