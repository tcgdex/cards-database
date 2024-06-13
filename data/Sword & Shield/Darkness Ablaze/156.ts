import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [823],
	name: {
		en: "Corviknight",
		fr: "Corvaillus",
		es: "Corviknight",
		it: "Corviknight",
		pt: "Corviknight",
		de: "Krarmor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flying Taxi",
				fr: "Taxi Volant",
				es: "Taxi Volador",
				it: "Volotaxi",
				pt: "Táxi Aéreo",
				de: "Flugtaxi"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 1 of your Pokémon, except any Corviknight, and all attached cards into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez ajouter à votre main l'un de vos Pokémon, à l'exception d'un Corvaillus, et toutes les cartes attachées.",
				es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 de tus Pokémon, excepto un Corviknight, y todas las cartas unidas a él en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi riprendere in mano uno dei tuoi Pokémon, a eccezione di qualsiasi Corviknight, e tutte le carte a esso assegnate.",
				pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 1 dos seus Pokémon, exceto por quaisquer Corviknight, e todas as cartas ligadas a ele na sua mão.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 deiner Pokémon, das kein Krarmor ist, und alle angelegten Karten auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blasting Wind",
				fr: "Vent Impitoyable",
				es: "Vientos Explosivos",
				it: "Vento Distruttivo",
				pt: "Vendaval Avassalador",
				de: "Peitschender Wind"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe."
	}
}

export default card
