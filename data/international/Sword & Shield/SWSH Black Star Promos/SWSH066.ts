import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'es-es': "Charizard",
		'it-it': "Charizard",
		'pt-br': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "NC Empire",
	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo",
		'es-es': "Charmeleon",
		'pt-br': "Charmeleon",
		'it-it': "Charmeleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Battle Sense",
			'fr-fr': "Sens du Combat",
			'es-es': "Instinto de Combate",
			'it-it': "Istinto di Lotta",
			'pt-br': "Intuição de Batalha",
			'de-de': "Kampfsinn"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Défaussez les autres cartes.",
			'es-es': "Una vez durante tu turno, puedes mirar las 3 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Descarta el resto de las cartas.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Scarta le altre carte.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do seu baralho e colocar 1 delas na sua mão. Descarte as demais cartas.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 3 Karten deines Decks anschauen und 1 davon auf deine Hand nehmen. Lege die anderen Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Royal Blaze",
			'fr-fr': "Flambée Royale",
			'es-es': "Ascuas Regias",
			'it-it': "Fiammata Maestosa",
			'pt-br': "Labareda Real",
			'de-de': "Königsflamme"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Leon card in your discard pile.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Tarak dans votre pile de défausse.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Lionel en tu pila de descartes.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Dandel nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta Leon na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Delion-Karte in deinem Ablagestapel 50 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
	},

	stage: "Stage2",
	dexId: [6],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 516329
	}
}

export default card
