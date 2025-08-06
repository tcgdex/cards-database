import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite",
		es: "Coalossal",
		it: "Coalossal",
		pt: "Coalossal",
		de: "Montecarbo"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine",
		de: "Wagong",
		es: "Carkol",
		pt: "Carkol",
		it: "Carkol"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Tar Generator",
			fr: "Générateur de Poix",
			es: "Generador Alquitrán",
			it: "Generatore di Catrame",
			pt: "Gerador de Piche",
			de: "Teergenerator"
		},

		effect: {
			en: "Once during your turn, you may attach a {R} Energy card, a {F} Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {R}, une carte Énergie {F}, ou une de chaque de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {R}, 1 carta de Energía {F} o 1 de cada una de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia {R}, una carta Energia {F} o entrambe dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {R}, 1 carta de Energia {F}, ou 1 de cada da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Einmal während deines Zuges kannst du 1 {R}-Energiekarte, 1 {F}-Energiekarte oder von beiden 1 aus deinem Ablagestapel beliebig an deine Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Flaming Avalanche",
			fr: "Avalanche Ardente",
			es: "Avalancha Flamígera",
			it: "Slavina Fiammeggiante",
			pt: "Avalanche Flamejante",
			de: "Lodernde Lawine"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	description: {
		en: "It's usually peaceful, but the vandalism of mines enrages it. Offenders will be incinerated with flames that reach 2,700 degrees Fahrenheit."
	},

	stage: "Stage2",
	dexId: [839],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453458
	}
}

export default card
