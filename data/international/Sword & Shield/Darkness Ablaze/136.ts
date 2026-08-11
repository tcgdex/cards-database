import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [162],

	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'es-es': "Furret",
		'it-it': "Furret",
		'pt-br': "Furret",
		'de-de': "Wiesenior"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'de-de': "Wiesor"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Feelin' Fine",
				'fr-fr': "Mode Cool",
				'es-es': "Buen Rollito",
				'it-it': "Tuttobene",
				'pt-br': "Sensação Boa",
				'de-de': "Wohl fühlen"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Smash",
				'fr-fr': "Éclate-Queue",
				'es-es': "Coletazo",
				'it-it': "Coda Esplosiva",
				'pt-br': "Pancada de Cauda",
				'de-de': "Schwanzschmetterer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483559,
				tcgplayer: 219333
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483559,
				tcgplayer: 219333
			}
		},
	],
}

export default card
