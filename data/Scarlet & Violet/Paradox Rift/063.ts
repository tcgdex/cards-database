import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Burst of Braying",
			fr: "Hennissement Éclatant",
			es: "Bramido Explosivo",
			it: "Raglioscoppio",
			pt: "Explosão de Zurro",
			de: "Wuchtiges Wiehern"
		},

		effect: {
			en: "Choose Basic {L} Energy cards from your discard pile up to the number of Prize cards your opponent has taken and attach them to your Pokémon in any way you like.",
			fr: "Choisissez dans votre pile de défausse un nombre de cartes Énergie {L} de base inférieur ou égal au nombre de cartes Récompense que votre adversaire a récupérées, puis attachez-les à vos Pokémon comme il vous plaît.",
			es: "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior al número de cartas de Premio que haya cogido tu rival, y únelas a tus Pokémon de la manera que desees.",
			it: "Scegli un numero di carte Energia base {L} dalla tua pila degli scarti uguale o inferiore al numero di carte Premio prese dal tuo avversario e assegnale ai tuoi Pokémon nel modo che preferisci.",
			pt: "Escolha cartas de Energia {L} Básica da sua pilha de descarte até o número de cartas de Prêmio que o seu oponente pegou e ligue-as aos seus Pokémon como desejar.",
			de: "Wähle bis zu so viele Basis-{L}-Energiekarten aus deinem Ablagestapel, wie dein Gegner Preiskarten genommen hat, und lege sie beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "GOSSAN"
}

export default card