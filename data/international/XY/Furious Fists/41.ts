import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Teleport Room",
				'fr-fr': "Centre de Téléportation",
				'es-es': "Sala Teletransporte",
				'it-it': "Sala Teletrasporto",
				'pt-br': "Sala de Teletransporte",
				'de-de': "Teleportationsraum"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, put a Stadium card with a different name from your discard pile into play.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, prenez une carte Stade d'un nom différent dans votre pile de défausse et mettez-la en jeu.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar cualquier carta de Estadio en juego. Si lo haces, pon en juego 1 carta de Estadio con un nombre diferente de tu pila de descartes.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Stadio in gioco. Se lo fai, prendi una carta Stadio con un altro nome dalla tua pila degli scarti e mettila in gioco.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar qualquer card de Estádio em jogo. Se fizer isso, coloque um card de Estádio com um nome diferente da sua pilha de descarte em jogo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, nimm eine Stadionkarte mit anderem Namen aus deinem Ablagestapel und bringe diese ins Spiel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psy Report",
				'fr-fr': "Observation Psychique",
				'es-es': "Psicoinforme",
				'it-it': "Psicosoffiata",
				'pt-br': "Relatório Psíquico",
				'de-de': "Psycho-Offenlegung"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela sua própria mão.",
				'de-de': "Dein Gegner deckt seine Handkarten auf."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
	},

	thirdParty: {
		cardmarket: 281705,
		tcgplayer: 92216
	}
}

export default card
