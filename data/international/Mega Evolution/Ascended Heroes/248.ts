import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'es-mx': "Drakloak",
		'de-de': "Phandra",
		'it-it': "Drakloak",
		'pt-br': "Drakloak"
	},

	evolveFrom: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'es-mx': "Dreepy",
		'de-de': "Grolldra",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [886],
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Recon Directive",
			'fr-fr': "Ordre de Reconnaissance",
			'es-es': "Orden de Búsqueda",
			'es-mx': "Orden de Búsqueda",
			'de-de': "Erkundungsbefehl",
			'it-it': "Ordine di Ricognizione",
			'pt-br': "Ordem de Reconhecimento"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte en dessous de votre deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes mirar las primeras 2 cartas de tu mazo y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu mazo.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte unter dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta in fondo al tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta como a carta de baixo do seu baralho."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Dragon Headbutt",
			'fr-fr': "Dracoud'Boule",
			'es-es': "Cabezazo Dragón",
			'es-mx': "Cabezazo Dragón",
			'de-de': "Drachen-Kopfnuss",
			'it-it': "Dragozuccata",
			'pt-br': "Cabeçada do Dragão"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon stores up energy in its lungs, then shoots it out. It takes care of Dreepy and battles alongside them until they’re all grown up.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869859,
				tcgplayer: 676060
			}
		}
	],
}

export default card
