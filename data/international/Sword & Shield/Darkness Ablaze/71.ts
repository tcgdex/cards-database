import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [210],

	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	attacks: [
		{
			cost: [
				"Psychic",
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
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Although it's popular with young people, Granbull is timid and sensitive, so it's totally incompetent as a watchdog."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483234,
				tcgplayer: 219446
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483234,
				tcgplayer: 219446
			}
		},
	],
}

export default card
