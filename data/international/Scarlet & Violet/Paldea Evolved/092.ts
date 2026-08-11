import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [576],
	set: Set,

	name: {
		'fr-fr': "Sidérella",
		'en-us': "Gothitelle",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Mesmérella",
		'en-us': "Gothorita",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Lecture des Étoiles",
			'en-us': "Read the Stars",
			'es-es': "Leer las Estrellas",
			'it-it': "Leggistelle",
			'pt-br': "Leitura das Estrelas",
			'de-de': "Sternendeutung"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus du deck de votre adversaire, puis y replacer l'une d'elles. Placez l'autre carte en dessous de son deck.",
			'en-us': "Once during your turn, you may look at the top 2 cards of your opponent's deck and put 1 of them back. Put the other card on the bottom of their deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 2 primeras cartas de la baraja de tu rival y volver a poner 1 de ellas en la parte superior de su baraja. Pon la otra carta en la parte inferior de su baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime due carte del mazzo del tuo avversario e rimetterne a posto una. Metti l'altra carta in fondo al suo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do baralho do seu oponente e colocar 1 delas de volta. Coloque a outra carta como a carta de baixo do baralho dele.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 2 Karten des Decks deines Gegners anschauen und 1 davon zurücklegen. Lege die andere Karte unter sein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Déstabilisation",
			'en-us': "Psych Out",
			'es-es': "Psicointimidación",
			'it-it': "Intimidazione",
			'pt-br': "Intimidar",
			'de-de': "Nervös machen"
		},

		effect: {
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'en-us': "Discard a random card from your opponent's hand.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715567,
				tcgplayer: 497507,
				cardtrader: 248719
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715567,
				tcgplayer: 497507,
				cardtrader: 248719
			}
		},
	],

	illustrator: "Shiburingaru",

	description: {
		'en-us': "Gothitelle unleashes psychic energy and shows opponents dreams of the universe's end. These dreams are apparently ethereal and beautiful.",
	},
}

export default card
