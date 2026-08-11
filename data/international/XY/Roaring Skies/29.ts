import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'es-es': "Premonición",
				'it-it': "Divinazione",
				'pt-br': "Visão do Futuro",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
				'es-es': "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				'it-it': "Guarda le prime cinque carte di uno dei giocatori e rimettile in cima al suo mazzo nell'ordine che preferisci.",
				'pt-br': "Olhe os 5 cards de cima do baralho de qualquer jogador e coloque-os de volta em cima do baralho daquele jogador em qualquer ordem.",
				'de-de': "Schau dir die obersten 5 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf dessen Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Stressful Eye",
				'fr-fr': "Regard Angoissant",
				'es-es': "Ojo Estresante",
				'it-it': "Ostilsguardo",
				'pt-br': "Olhar Desgastante",
				'de-de': "Entnervendes Auge"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				'fr-fr': "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra quelle carte.",
				'pt-br': "Seu oponente revela a própria mão. Descarte um card de Treinador que encontrar.",
				'de-de': "Dein Gegner deckt seine Handkarten auf. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
	},

	thirdParty: {
		cardmarket: 282697,
		tcgplayer: 98065
	}
}

export default card
