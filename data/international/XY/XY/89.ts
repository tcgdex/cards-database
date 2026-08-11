import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gather Energy",
				'fr-fr': "Récolte d'Énergie",
				'es-es': "Acopio de Energía",
				'it-it': "Raccoglienergia",
				'pt-br': "Acumular Energia",
				'de-de': "Energie sammeln"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a 1 de tus Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia básica e ligue-o a 1 dos seus Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hocus Pinkus",
				'fr-fr': "Abracadabra",
				'es-es': "Abracadabri",
				'it-it': "Parimpampum",
				'pt-br': "Hocus Pinkus",
				'de-de': "Hokuspinkus"
			},
			effect: {
				'en-us': "The Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "O Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their fur feels so good that if two of them snuggle together, they won't want to be separated.",
	},

	thirdParty: {
		cardmarket: 281426,
		tcgplayer: 90601
	}
}

export default card
