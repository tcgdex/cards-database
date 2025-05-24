import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	illustrator: "NC Empire",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		es: "Charmeleon",
		pt: "Charmeleon",
		it: "Charmeleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Battle Sense",
			fr: "Sens du Combat",
			es: "Instinto de Combate",
			it: "Istinto di Lotta",
			pt: "Intuição de Batalha",
			de: "Kampfsinn"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Défaussez les autres cartes.",
			es: "Una vez durante tu turno, puedes mirar las 3 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Descarta el resto de las cartas.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Scarta le altre carte.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do seu baralho e colocar 1 delas na sua mão. Descarte as demais cartas.",
			de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten deines Decks anschauen und 1 davon auf deine Hand nehmen. Lege die anderen Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		name: {
			en: "Royal Blaze",
			fr: "Flambée Royale",
			es: "Ascuas Regias",
			it: "Fiammata Maestosa",
			pt: "Labareda Real",
			de: "Königsflamme"
		},

		effect: {
			en: "This attack does 50 more damage for each Leon card in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Tarak dans votre pile de défausse.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Lionel en tu pila de descartes.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Dandel nella tua pila degli scarti.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada carta Leon na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Delion-Karte in deinem Ablagestapel 50 Schadenspunkte mehr zu."
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
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
	},

	stage: "Stage2",
	dexId: [6],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
