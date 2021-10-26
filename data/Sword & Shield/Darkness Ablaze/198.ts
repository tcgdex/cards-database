import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Coalossal",
		fr: "Monthracite",
		es: "Coalossal",
		it: "Coalossal",
		pt: "Coalossal",
		de: "Montecarbo"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol",
		de: "Wagong"
	},

	abilities: [
		{
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
				en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
				fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon comme il vous plaît.",
				es: "Una vez durante tu turno, puedes unir 1 carta de Energía Fire, 1 carta de Energía Fighting o 1 de cada una de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia Fire, una carta Energia Fighting o entrambe dalla tua pila degli scarti nel modo che preferisci.",
				pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Fire, 1 carta de Energia Fighting, ou 1 de cada da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Einmal während deines Zuges kannst du 1 Fire-Energiekarte, 1 Fighting-Energiekarte oder von beiden 1 aus deinem Ablagestapel beliebig an deine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flaming Avalanche",
				fr: "Avalanche Ardente",
				es: "Avalancha Flamígera",
				it: "Slavina Fiammeggiante",
				pt: "Avalanche Flamejante",
				de: "Lodernde Lawine"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It's usually peaceful, but the vandalism of mines enrages it. Offenders will be incinerated with flames that reach 2,700 degrees Fahrenheit."
	}
}

export default card
