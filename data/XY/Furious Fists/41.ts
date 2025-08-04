import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
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
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Teleport Room",
				fr: "Centre de Téléportation",
				es: "Sala Teletransporte",
				it: "Sala Teletrasporto",
				pt: "Sala de Teletransporte",
				de: "Teleportationsraum"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, put a Stadium card with a different name from your discard pile into play.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, prenez une carte Stade d'un nom différent dans votre pile de défausse et mettez-la en jeu.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar cualquier carta de Estadio en juego. Si lo haces, pon en juego 1 carta de Estadio con un nombre diferente de tu pila de descartes.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Stadio in gioco. Se lo fai, prendi una carta Stadio con un altro nome dalla tua pila degli scarti e mettila in gioco.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar qualquer card de Estádio em jogo. Se fizer isso, coloque um card de Estádio com um nome diferente da sua pilha de descarte em jogo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, nimm eine Stadionkarte mit anderem Namen aus deinem Ablagestapel und bringe diese ins Spiel."
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
				en: "Psy Report",
				fr: "Observation Psychique",
				es: "Psicoinforme",
				it: "Psicosoffiata",
				pt: "Relatório Psíquico",
				de: "Psycho-Offenlegung"
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
				es: "Tu rival enseña las cartas de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano.",
				pt: "Seu oponente revela sua própria mão.",
				de: "Dein Gegner deckt seine Handkarten auf."
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

	thirdParty: {
		cardmarket: 281705,
		tcgplayer: 92216
	}
}

export default card
