import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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

			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Hold",
				'fr-fr': "Prise Étau",
				'es-es': "Fuerte Apretón",
				'it-it': "Presa Pesante",
				'pt-br': "Imobilização Potente",
				'de-de': "Schwerer Halt"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t attack during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "O Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With its ability to distinguish any aroma, it unfailingly finds all food buried deep underground.",
	},

	thirdParty: {
		cardmarket: 408484,
		tcgplayer: 201294
	}
}

export default card
