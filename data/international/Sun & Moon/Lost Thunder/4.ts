import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Grip and Squeeze",
				'fr-fr': "Empoigne Puissante",
				'es-es': "Coger y Estrujar",
				'it-it': "Acchiappa e Spremi",
				'pt-br': "Agarrar e Espremer",
				'de-de': "Grapschen und Quetschen"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
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

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "One solid blow from its horns is enough to split apart a large tree. Its greatest rival in Alola is Vikavolt.",
	},

	thirdParty: {
		cardmarket: 365572,
		tcgplayer: 178801
	}
}

export default card
