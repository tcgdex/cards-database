import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		'es-mx': "Drakloak",
		de: "Phandra",
		it: "Drakloak",
		pt: "Drakloak"
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",
	dexId: [886],

	abilities: [{
		type: "Ability",

		name: {
			en: "Recon Directive",
			fr: "Ordre de Reconnaissance",
			es: "Orden de Búsqueda",
			'es-mx': "Orden de Búsqueda",
			de: "Erkundungsbefehl",
			it: "Ordine di Ricognizione",
			pt: "Ordem de Reconhecimento"
		},

		effect: {
			en: "Once during your turn, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte en dessous de votre deck.",
			es: "Una vez durante tu turno, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes mirar las primeras 2 cartas de tu mazo y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu mazo.",
			de: "Einmal während deines Zuges kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte unter dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta in fondo al tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta como a carta de baixo do seu baralho."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic"],

		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud'Boule",
			es: "Cabezazo Dragón",
			'es-mx': "Cabezazo Dragón",
			de: "Drachen-Kopfnuss",
			it: "Dragozuccata",
			pt: "Cabeçada do Dragão"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676060,
		cardmarket: 869859
	}
}

export default card
