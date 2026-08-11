import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		'en-us': "Misty's Psyduck",
		'fr-fr': "Psykokwak d'Ondine",
		'de-de': "Mistys Enton",
		'it-it': "Psyduck di Misty",
		'es-es': "Psyduck de Misty",
		'pt-br': "Psyduck da Misty",
		'es-mx': "Psyduck de Misty"
	},


	illustrator: "OKACHEKE",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flustered Leap",
			'fr-fr': "Saut Agité",
			'de-de': "Zerfahrener Sprung",
			'it-it': "Balzo Agitato",
			'es-es': "Salto Aturullado",
			'pt-br': "Salto Afobado",
			'es-mx': "Salto Atolondrado"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may discard the bottom card of your deck. If you do, discard all cards from this Pokémon and put this Pokémon on top of your deck.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez défausser la carte du dessous de votre deck. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez ce Pokémon sur le dessus de votre deck.",
			'de-de': "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du die unterste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, lege alle Karten von diesem Pokémon auf deinen Ablagestapel und lege dieses Pokémon auf dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scartare la carta in fondo al tuo mazzo. Se lo fai, scarta tutte le carte da questo Pokémon e mettilo in cima al tuo mazzo.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar la última carta de tu baraja. Si lo haces, descarta todas las cartas de este Pokémon y pon este Pokémon en la parte superior de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá descartar a carta de baixo do seu baralho. Se fizer isto, descarte todas as cartas deste Pokémon e coloque este Pokémon como a carta de cima do seu baralho.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar la última carta de tu mazo. Si lo haces, descarta todas las cartas de este Pokémon y pon este Pokémon en la parte superior de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante",
			'de-de': "Wassersprüher",
			'it-it': "Goccioline",
			'es-es': "Esparcir Agua",
			'pt-br': "Aspergir Água",
			'es-mx': "Dispersaagua"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826067,
				tcgplayer: 632993
			}
		},
	],
}

export default card
