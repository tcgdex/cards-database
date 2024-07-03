import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [576],
	set: Set,

	name: {
		fr: "Sidérella",
		en: "Gothitelle",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Lecture des Étoiles",
			en: "Read the Stars",
			es: "Leer las Estrellas",
			it: "Leggistelle",
			pt: "Leitura das Estrelas",
			de: "Sternendeutung"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus du deck de votre adversaire, puis y replacer l'une d'elles. Placez l'autre carte en dessous de son deck.",
			en: "Once during your turn, you may look at the top 2 cards of your opponent's deck and put 1 of them back. Put the other card on the bottom of their deck.",
			es: "Una vez durante tu turno, puedes mirar las 2 primeras cartas de la baraja de tu rival y volver a poner 1 de ellas en la parte superior de su baraja. Pon la otra carta en la parte inferior de su baraja.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime due carte del mazzo del tuo avversario e rimetterne a posto una. Metti l'altra carta in fondo al suo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do baralho do seu oponente e colocar 1 delas de volta. Coloque a outra carta como a carta de baixo do baralho dele.",
			de: "Einmal während deines Zuges kannst du dir die obersten 2 Karten des Decks deines Gegners anschauen und 1 davon zurücklegen. Lege die andere Karte unter sein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Déstabilisation",
			en: "Psych Out",
			es: "Psicointimidación",
			it: "Intimidazione",
			pt: "Intimidar",
			de: "Nervös machen"
		},

		effect: {
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			en: "Discard a random card from your opponent's hand.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card