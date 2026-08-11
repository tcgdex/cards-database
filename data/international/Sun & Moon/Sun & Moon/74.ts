import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		769,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shore Up",
				'fr-fr': "Amass’Sable",
				'es-es': "Recogearena",
				'it-it': "Sabbiaccumulo",
				'pt-br': "Suporte",
				'de-de': "Sandsammler"
			},
			effect: {
				'en-us': "Attach a Fighting Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Fighting de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fighting da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Fighting-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tourbi-Sable",
				'es-es': "Bucle Arena",
				'it-it': "Sabbiotomba",
				'pt-br': "Fosso de Areia",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

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
		'en-us': "It takes control of anyone who puts a hand in its mouth. And so it adds to the accumulation of its sand-mound body.",
	},

	thirdParty: {
		cardmarket: 295385,
		tcgplayer: 126946
	}
}

export default card
