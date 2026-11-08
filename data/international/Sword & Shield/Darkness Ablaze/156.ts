import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [823],

	name: {
		'en-us': "Corviknight",
		'fr-fr': "Corvaillus",
		'es-es': "Corviknight",
		'it-it': "Corviknight",
		'pt-br': "Corviknight",
		'de-de': "Krarmor"
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
		'en-us': "Corvisquire",
		'fr-fr': "Bleuseille",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flying Taxi",
				'fr-fr': "Taxi Volant",
				'es-es': "Taxi Volador",
				'it-it': "Volotaxi",
				'pt-br': "Táxi Aéreo",
				'de-de': "Flugtaxi"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 1 of your Pokémon, except any Corviknight, and all attached cards into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez ajouter à votre main l'un de vos Pokémon, à l'exception d'un Corvaillus, et toutes les cartes attachées.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 de tus Pokémon, excepto un Corviknight, y todas las cartas unidas a él en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi riprendere in mano uno dei tuoi Pokémon, a eccezione di qualsiasi Corviknight, e tutte le carte a esso assegnate.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 1 dos seus Pokémon, exceto por quaisquer Corviknight, e todas as cartas ligadas a ele na sua mão.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 deiner Pokémon, das kein Krarmor ist, und alle angelegten Karten auf deine Hand nehmen."
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
				'en-us': "Blasting Wind",
				'fr-fr': "Vent Impitoyable",
				'es-es': "Vientos Explosivos",
				'it-it': "Vento Distruttivo",
				'pt-br': "Vendaval Avassalador",
				'de-de': "Peitschender Wind"
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


	stage: "Stage2",

	description: {
		'en-us': "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483659,
				tcgplayer: 219371
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 547951
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483659,
				tcgplayer: 219371
			}
		},
	],
}

export default card
