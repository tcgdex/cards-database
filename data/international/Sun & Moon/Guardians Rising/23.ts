import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sludge Shock",
				'fr-fr': "Choc Détritus",
				'es-es': "Impacto de Residuos",
				'it-it': "Fangoshock",
				'pt-br': "Choque de Lama",
				'de-de': "Schlammschock"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t be healed during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede ser curado durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può essere curato.",
				'pt-br': "O Pokémon Defensor não poderá ser curado durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht geheilt werden."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They can be found lying dehydrated on beaches, but they are often still alive. When soaked in water, they will revive.",
	},

	thirdParty: {
		cardmarket: 297486,
		tcgplayer: 130923
	}
}

export default card
