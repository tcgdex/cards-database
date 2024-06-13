import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		fr: "Monthracite",
		en: "Coalossal",
		es: "Coalossal",
		it: "Coalossal",
		pt: "Coalossal",
		de: "Montecarbo"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Wagomine",
		en: "Carkol"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Générateur de Poix",
			en: "Tar Generator",
			es: "Generador Alquitrán",
			it: "Generatore di Catrame",
			pt: "Gerador de Piche",
			de: "Teergenerator"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon, comme il vous plaît.",
			en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Fire, 1 carta de Energía Fighting o 1 de cada una de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia Fire, una carta Energia Fighting o entrambe dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Fire, 1 carta de Energia Fighting, ou 1 de cada da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Einmal während deines Zuges kannst du 1 Fire-Energiekarte, 1 Fighting-Energiekarte oder von beiden 1 aus deinem Ablagestapel beliebig an deine Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			fr: "Avalanche Ardente",
			en: "Flaming Avalanche",
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
	regulationMark: "D",
	stage: "Stage2",

	description: {
		en: "It's usually peaceful, but the vandalism of mines enrages it. Offenders will be incinerated with flames that reach 2,700 degrees Fahrenheit."
	}
}

export default card
