import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		en: "Misty's Psyduck",
		fr: "Psykokwak d'Ondine",
		de: "Mistys Enton",
		it: "Psyduck di Misty",
		es: "Psyduck de Misty",
		pt: "Psyduck da Misty",
		'es-mx': "Psyduck de Misty"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flustered Leap",
			fr: "Saut Agité",
			de: "Zerfahrener Sprung",
			it: "Balzo Agitato",
			es: "Salto Aturullado",
			pt: "Salto Afobado",
			'es-mx': "Salto Atolondrado"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may discard the bottom card of your deck. If you do, discard all cards from this Pokémon and put this Pokémon on top of your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez défausser la carte du dessous de votre deck. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez ce Pokémon sur le dessus de votre deck.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du die unterste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, lege alle Karten von diesem Pokémon auf deinen Ablagestapel und lege dieses Pokémon auf dein Deck.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scartare la carta in fondo al tuo mazzo. Se lo fai, scarta tutte le carte da questo Pokémon e mettilo in cima al tuo mazzo.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar la última carta de tu baraja. Si lo haces, descarta todas las cartas de este Pokémon y pon este Pokémon en la parte superior de tu baraja.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá descartar a carta de baixo do seu baralho. Se fizer isto, descarte todas as cartas deste Pokémon e coloque este Pokémon como a carta de cima do seu baralho.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes descartar la última carta de tu mazo. Si lo haces, descarta todas las cartas de este Pokémon y pon este Pokémon en la parte superior de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante",
			de: "Wassersprüher",
			it: "Goccioline",
			es: "Esparcir Agua",
			pt: "Aspergir Água",
			'es-mx': "Dispersaagua"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825919
	}
}

export default card
