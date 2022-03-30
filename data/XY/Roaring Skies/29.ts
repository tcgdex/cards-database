import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu",
		de: "Xatu"
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
		en: "Natu",
		fr: "Natu",
		es: "Natu",
		it: "Natu",
		pt: "Natu",
		de: "Natu"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
				es: "Premonición",
				it: "Divinazione",
				pt: "Visão do Futuro",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
				es: "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				it: "Guarda le prime cinque carte di uno dei giocatori e rimettile in cima al suo mazzo nell'ordine che preferisci.",
				pt: "Olhe os 5 cards de cima do baralho de qualquer jogador e coloque-os de volta em cima do baralho daquele jogador em qualquer ordem.",
				de: "Schau dir die obersten 5 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf dessen Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Stressful Eye",
				fr: "Regard Angoissant",
				es: "Ojo Estresante",
				it: "Ostilsguardo",
				pt: "Olhar Desgastante",
				de: "Entnervendes Auge"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra quelle carte.",
				pt: "Seu oponente revela a própria mão. Descarte um card de Treinador que encontrar.",
				de: "Dein Gegner deckt seine Handkarten auf. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
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



}

export default card
