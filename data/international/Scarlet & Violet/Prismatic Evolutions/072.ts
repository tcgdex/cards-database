import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [886],
	set: Set,

	name: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'pt-br': "Drakloak",
		'it-it': "Drakloak",
		'de-de': "Phandra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'pt-br': "Dreepy",
		'it-it': "Dreepy",
		'de-de': "Grolldra"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Recon Directive",
			'fr-fr': "Ordre de Reconnaissance",
			'es-es': "Orden de Búsqueda",
			'pt-br': "Ordem de Reconhecimento",
			'it-it': "Ordine di Ricognizione",
			'de-de': "Erkundungsbefehl"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte en dessous de votre deck.",
			'es-es': "Una vez durante tu turno, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta como a carta de baixo do seu baralho.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta in fondo al tuo mazzo.",
			'de-de': "Einmal während deines Zuges kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte unter dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Dragon Headbutt",
			'fr-fr': "Dracoud'Boule",
			'es-es': "Cabezazo Dragón",
			'pt-br': "Cabeçada do Dragão",
			'it-it': "Dragozuccata",
			'de-de': "Drachen-Kopfnuss"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "cochi8i",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805461,
				tcgplayer: 610427
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805461,
				tcgplayer: 610427
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806512,
				tcgplayer: 610589
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806513,
				tcgplayer: 610690
			}
		},
	],
}

export default card
