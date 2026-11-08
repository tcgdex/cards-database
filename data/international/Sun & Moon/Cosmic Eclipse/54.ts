import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'es-es': "Piplup",
		'it-it': "Piplup",
		'pt-br': "Piplup",
		'de-de': "Plinfa"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubble Hold",
				'fr-fr': "Bulles Bloquantes",
				'es-es': "Bloqueo Burbuja",
				'it-it': "Gabbia di Bolle",
				'pt-br': "Prisão de Bolhas",
				'de-de': "Blasengriff"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It doesn't like to be taken care of. It's difficult to bond with since it won't listen to its Trainer.",
	},

	thirdParty: {
		cardmarket: 398504,
		tcgplayer: 201230
	}
}

export default card
