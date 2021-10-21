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

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Tar Generator",
			fr: "Générateur de Poix",
			es: "Generador Alquitrán",
			it: "Generatore di Catrame",
			pt: "Tar Generator",
			de: "Teergenerator"
		},

		effect: {
			en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Fire, 1 carta de Energía Fighting o 1 de cada una de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia Fire, una carta Energia Fighting o entrambe dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
			de: "Einmal während deines Zuges kannst du 1 Fire-Energiekarte, 1 Fighting-Energiekarte oder von beiden 1 aus deinem Ablagestapel beliebig an deine Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Flaming Avalanche",
			fr: "Avalanche Ardente",
			es: "Avalancha Flamígera",
			it: "Slavina Fiammeggiante",
			pt: "Flaming Avalanche",
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
		holo: false,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
